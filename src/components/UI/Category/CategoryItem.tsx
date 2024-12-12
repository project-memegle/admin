import { forwardRef, useState } from 'react';
import { TItem } from '../../../pages/Category/Cateogry';
import { useTranslation } from 'react-i18next';
import ToastMessage from '../ToastMessage/ToastMessage';

interface CategoryItemProps {
    item: TItem;
    isOpacityEnabled?: boolean;
    isDragging?: boolean;
    style?: React.CSSProperties;
}

const CategoryItem = forwardRef<HTMLDivElement, CategoryItemProps>(
    ({ item, isOpacityEnabled, isDragging, style, ...props }, ref) => {
        const { t } = useTranslation();
        const [toast, setToast] = useState(false);
        const [toastMessage, setToastMessage] = useState('');

        const handleDeleteClick = () => {
            alert(t('RECHECK_DELETE'));
            setToastMessage(t('SUCCESS_DELETE'));
        };
        return (
            <>
                <article
                    className="c-category__item"
                    ref={ref}
                    style={style}
                    {...props}
                >
                    <div
                        className="c-category__item-delete"
                        onClick={handleDeleteClick}
                    >
                        <i className="c-icon">delete</i>
                    </div>
                    <img
                        className="c-category__item-img"
                        src={item.imageUrl}
                        alt={`img-${item.id}`}
                    />
                    <p className="c-category__item-title">{item.keyword}</p>
                </article>
            </>
        );
    }
);

export default CategoryItem;
