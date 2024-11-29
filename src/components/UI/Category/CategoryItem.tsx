import { forwardRef } from 'react';
import { TItem } from '../../../pages/Cateogry';

interface CategoryItemProps {
    item: TItem; // 추가적인 props 타입 정의
    isOpacityEnabled?: boolean;
    isDragging?: boolean;
    style?: React.CSSProperties;
}

const CategoryItem = forwardRef<HTMLDivElement, CategoryItemProps>(
    ({ item, isOpacityEnabled, isDragging, style, ...props }, ref) => {
        return (
            <>
                <article
                    className="c-category__item"
                    ref={ref}
                    style={style}
                    {...props}
                >
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
