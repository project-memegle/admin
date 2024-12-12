import { AxiosError } from 'axios';
import getValidationMessages from '../../components/Validations/ValidationMessages';
import StorageKeyword from '../../Constant/StorageKeyword';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { post } from '../../utils/API/fetcher';
import { handleApiError } from '../../utils/API/handleApiError';
import handleKeyDown from '../../utils/Event/preventEnter';
import { setSessionStorages } from '../../utils/sessionStorage';
export const UPLOAD_URL = '/images';

export default function CategorySetting() {
    const ValidationMessages = getValidationMessages();
    const { t } = useTranslation();

    const [file, setFile] = useState<File | undefined>();
    const [category, setCategory] = useState<string | undefined>();

    const [errorMessage, setErrorMessage] = useState('');
    const [fileName, setFileName] = useState<string>(t('REQUIRED_UPLOAD_FILE'));
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const navigate = useCustomNavigate();
    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        handleFile(selectedFile);
    };

    const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    };
    const handleFile = (selectedFile: File | undefined) => {
        const allowedTypes = [
            'image/gif',
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/webp',
        ];
        const maxSizeInMB = 5;
        const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

        if (selectedFile) {
            if (!allowedTypes.includes(selectedFile.type)) {
                alert(ValidationMessages.INVALID_FILE_FORMAT);
                return;
            }

            if (selectedFile.size > maxSizeInBytes) {
                alert(ValidationMessages.INVALID_FILE_SIZE);
                return;
            }

            setFile(selectedFile);
            setFileName(selectedFile.name);
            setImageUrl(URL.createObjectURL(selectedFile));
        }
    };

    const resetFile = () => {
        setFile(undefined);
        setFileName(t('REQUIRED_UPLOAD_FILE'));
        setImageUrl(undefined);
    };

    const upload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            setErrorMessage(t('REQUIRED_UPLOAD_FILE'));
            return;
        }
        if (!category) {
            setErrorMessage(t('REQUIRED_UPLOAD_CATEGORY'));
            return;
        }
        const formData = new FormData();
        formData.append('memeImageFile', file);
        formData.append('cateogry', category);

        try {
            // const response = await post(UPLOAD_URL, formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            // });

            alert(t('SUCCESS_SAVING_CHANGES'));
            navigate('/category');
        } catch (error) {
            handleApiError(error as AxiosError, setErrorMessage);
        }
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const selectedFile = e.dataTransfer.files?.[0];
        handleFile(selectedFile);
    };
    return (
        <div className="main__container">
            <form
                onSubmit={upload}
                encType="multipart/form-data"
                className="c-upload"
                onKeyDown={handleKeyDown}
            >
                <section
                    className={`file-upload ${isDragging ? 'dragging' : ''}`}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="file-upload__area">
                        {imageUrl ? (
                            <>
                                <button
                                    className="file-upload__delete"
                                    onClick={resetFile}
                                >
                                    <i className="c-icon">delete</i>
                                </button>
                                <img
                                    src={imageUrl}
                                    alt="Uploaded file preview"
                                    className="file-upload__preview"
                                />
                            </>
                        ) : (
                            <>
                                <i className="file-upload__icon c-icon">
                                    upload_file
                                </i>
                                <h4>{t('REQUIRED_DND_FILE')}</h4>
                                <input
                                    className="file-upload__input"
                                    type="file"
                                    onChange={onChangeFile}
                                    ref={fileInputRef}
                                />
                            </>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={handleUploadButtonClick}
                        className="file-upload__button"
                    >
                        {t('IMAGE_UPLOAD')}
                    </button>
                    <div className="c-upload__cateogry-container">
                        <label htmlFor="category">카테고리</label>
                        <input
                            id="category"
                            type="text"
                            placeholder={t('REQUIRED_CATEGORY_NAME')}
                            onChange={onChangeCategory}
                        />
                    </div>
                </section>
                {errorMessage && <p className="font-warning">{errorMessage}</p>}
                <section className="c-login__button-section">
                    <button
                        className="button__rounded button__light"
                        type="submit"
                    >
                        {t('ASKED_UPLOAD')}
                    </button>
                </section>
            </form>
        </div>
    );
}
