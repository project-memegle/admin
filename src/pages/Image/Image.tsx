import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import MOCK_FAVORITE_LIST from '../../mockData/__FavoriteList';
import {
    SearchResultItemDTO,
    SearchResultSectionDTO,
} from '../../services/dto/ResultDto';

export default function Image() {
    const navigate = useCustomNavigate();
    const { t } = useTranslation();
    const [items, setItems] =
        useState<SearchResultSectionDTO>(MOCK_FAVORITE_LIST);
    function onClick(item: SearchResultItemDTO) {
        return (e: MouseEvent<HTMLLIElement>) => {
            e.preventDefault();
            navigate(`/image/${item.id}`);
        };
    }

    return (
        <main className="home__main">
            <div className="c-title">
                <h2>{t('IMAGE_MANAGEMENT')}</h2>
            </div>
            <section className="c-image__section">
                {items.results.map((item: SearchResultItemDTO) => (
                    <article
                        key={item.id}
                        onClick={onClick(item)}
                        className="c-image__section-item"
                    >
                        <img src={item.imageUrl} alt="" />
                    </article>
                ))}
            </section>
        </main>
    );
}
