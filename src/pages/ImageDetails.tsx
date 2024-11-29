import { useLocation } from 'react-router-dom';
import { FakeData, fakeDataItem } from './Image';
import { useState, useEffect } from 'react';
import useNavigateToBack from '../hooks/useNavigateToBack';
import { useTranslation } from 'react-i18next';
import { MOCK_CATEGORY_LIST } from '../mockData/__CategoryList';

const fakeDataArray = FakeData.results;

export default function ImageDetails() {
    const location = useLocation();

    const { imageUrl, imageCategory } = location.state as fakeDataItem;
    const [categories, setCategories] = useState<string[]>([]);
    const { t } = useTranslation();
    useEffect(() => {
        const imageCategories = MOCK_CATEGORY_LIST.results.map(
            (item) => item.imageCategory
        );
        setCategories(imageCategories);
    }, []);

    const onChangeButton = useNavigateToBack();

    return (
        <main className="home__main c-image__detail">
            <div className="c-title">
                <section className="c-title__detail">
                    <button
                        className="c-title__detail-button"
                        type="button"
                        onClick={onChangeButton}
                    >
                        <i className="c-icon">arrow_back_ios</i>
                    </button>
                    <h2>{t('DEFAULT_CATEGORY')}</h2>
                </section>
                <button className="button__light">
                    {t('BUTTON_SAVING_BUTTON')}
                </button>
            </div>
            <form className="c-image__detail-section">
                <div>
                    <img src={imageUrl} alt={imageCategory} />
                </div>
                <div className="c-image__detail-section-item">
                    <label htmlFor="">{t('IMAGE_MEME_ID')}</label>
                    <input
                        type="text"
                        value="1
                    "
                    />
                </div>{' '}
                <div className="c-image__detail-section-item">
                    <label htmlFor="">{t('IMAGE_FINAL_MODIFIED_DATE')}</label>
                    <input type="text" value="2023.04.10" />
                </div>{' '}
                <div className="c-image__detail-section-item">
                    <label htmlFor="">{t('IMAGE_UPLOADED_DATE')}</label>
                    <input type="text" value="2023.04.01" />
                </div>{' '}
                <div className="c-image__detail-section-item">
                    <label htmlFor="">{t('IMAGE_VERIFICATION_STATE')}</label>
                    {/* <input type="text" value="미승인" /> */}
                    <select name="confirm" id="confirm">
                        <option value="미승인">{t('IMAGE_UNAPPROVED')}</option>
                        <option value="승인">{t('IMAGE_APPROVAL')}</option>
                        <option value="반려">{t('IMAGE_REJECTION')}</option>
                    </select>
                </div>{' '}
                <div className="c-image__detail-section-item">
                    <label htmlFor="">카테고리</label>
                    <select name="category" id="category">
                        {categories.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </main>
    );
}
