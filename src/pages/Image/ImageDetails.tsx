import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchResultItemDTO } from '../../services/dto/ResultDto';
import { getLastKeywordFromUrl } from '../../utils/Event/saveUrl';
import MOCK_FAVORITE_LIST from '../../mockData/__FavoriteList';
import { formatStaticDate } from '../../utils/Format/formatDate';

export default function ImageDetails() {
    const { t, i18n } = useTranslation();
    const [resultData, setResultData] = useState<SearchResultItemDTO | null>(
        null
    );
    const mockFavouriteList = MOCK_FAVORITE_LIST;
    useEffect(() => {
        const lastKeyword = getLastKeywordFromUrl<number | string>();
        if (
            typeof lastKeyword === 'string' ||
            typeof lastKeyword === 'number'
        ) {
            const foundItem = mockFavouriteList.results.find(
                (item) => item.id === Number(lastKeyword)
            );
            if (foundItem) {
                setResultData(foundItem);
            }
        }
    }, [mockFavouriteList]);

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert(t('RECHECK_DELETE'));
    }
    return (
        <main className="home__main c-image__detail">
            <div className="c-title">
                <section className="c-title__detail">
                    <button className="c-title__detail-button">
                        <i className="c-icon">arrow_back_ios</i>
                    </button>
                    <h2>{t('IMAGE_DEATAILS')}</h2>
                </section>
                <button className="button__light">
                    {t('BUTTON_SAVING_BUTTON')}
                </button>
            </div>
            <form className="c-image__detail-section" onSubmit={onSubmit}>
                {resultData && (
                    <>
                        <div className="c-image__detail-image-container">
                            <img
                                src={'/admin/' + resultData.imageUrl}
                                alt={resultData.imageCategory}
                            />
                        </div>
                        <div className="c-image__detail-section-item">
                            <label htmlFor="">{t('IMAGE_MEME_ID')}</label>
                            <input type="text" value={resultData.id} readOnly />
                        </div>
                        <div className="c-image__detail-section-item">
                            <label htmlFor="">
                                {t('IMAGE_FINAL_MODIFIED_DATE')}
                            </label>
                            <input
                                type="text"
                                value={formatStaticDate(
                                    resultData.modifiedAt,
                                    i18n.language
                                )}
                                readOnly
                            />
                        </div>
                        <div className="c-image__detail-section-item">
                            <label htmlFor="">{t('IMAGE_UPLOADED_DATE')}</label>
                            <input
                                type="text"
                                value={formatStaticDate(
                                    resultData.createdAt,
                                    i18n.language
                                )}
                                readOnly
                            />
                        </div>
                        <div className="c-image__detail-section-item">
                            <label htmlFor="">
                                {t('IMAGE_VERIFICATION_STATE')}
                            </label>
                            <select name="confirm" id="confirm">
                                <option value="미승인">
                                    {t('IMAGE_UNAPPROVED')}
                                </option>
                                <option value="승인">
                                    {t('IMAGE_APPROVAL')}
                                </option>
                                <option value="반려">
                                    {t('IMAGE_REJECTION')}
                                </option>
                            </select>
                        </div>
                        <div className="c-image__detail-section-item">
                            <label htmlFor="">{t('DEFAULT_CATEGORY')}</label>
                            <input
                                type="text"
                                value={resultData.imageCategory}
                                readOnly
                            />
                        </div>
                        <div className="c-image__detail-section-item">
                            <label htmlFor="">{t('DEFAULT_TAGLIST')}</label>
                            <input
                                type="text"
                                value={resultData.tagList.join(', ')}
                                readOnly
                            />
                        </div>
                    </>
                )}
                <button className="button__light">{t('DEFAULT_DELETE')}</button>
            </form>
        </main>
    );
}
