import { HTMLAttributes } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import CategoryItem from './CategoryItem';
import { TItem } from '../../../pages/Cateogry';

type CategoryItemWrapper = {
    item: TItem;
} & HTMLAttributes<HTMLDivElement>;

const CategoryItemWrapper = ({ item, ...props }: CategoryItemWrapper) => {
    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: item.id,
    });

    const styles = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
    };

    return (
        <CategoryItem
            item={item}
            ref={setNodeRef}
            style={styles}
            isOpacityEnabled={isDragging}
            {...props}
            {...attributes}
            {...listeners}
        />
    );
};
export default CategoryItemWrapper;
