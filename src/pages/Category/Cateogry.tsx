import { useState } from 'react';

import { useMockCategoryList } from '../../mockData/__CategoryList';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export type TItem = {
    id: number;
    imageUrl: string;
    keyword: string;
};

export default function Category() {
    const mockCategoryList = useMockCategoryList();
    const [items, setItems] = useState<TItem[]>(
        mockCategoryList.results.map((item) => ({
            id: item.id,
            keyword: item.imageCategory,
            imageUrl: item.titleImageUrl,
        }))
    );
    const [toast, setToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const { t } = useTranslation();
    // useEffect(() => {
    //     // mockCategoryList를 기본값으로 설정
    //     setCategoryList(mockCategoryList);
    //     if (categoryList) {
    //         setItems(
    //             categoryList.results.map((item) => ({
    //                 id: item.id,
    //                 keyword: item.imageCategory,
    //                 imageUrl: item.titleImageUrl,
    //             }))
    //         );
    //     }
    //     // 비동기로 실제 데이터를 불러옴
    //     // fetchCategoryList();
    // }, []);

    const handleButtonClick = () => {
        const itemIds = items.map((item) => item.id);
        // alert(itemIds);
        alert(t('SUCCESS_SAVING_CHANGES'));
    };

    return (
        <main className="home__main">
            <div className="c-title">
                <h2>{t('CATEOGRY_MANAGEMENT')}</h2>
                <button className="button__light" onClick={handleButtonClick}>
                    {t('BUTTON_SAVING_BUTTON')}
                </button>
            </div>
            <Outlet />
        </main>
    );
}
