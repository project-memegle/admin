import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    rectSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import CategoryItemWrapper from '../components/UI/Category/CategoryItemWrapper';
import { useState } from 'react';
import CategoryItem from '../components/UI/Category/CategoryItem';

export type TItem = {
    id: number;
    imageUrl: string;
    keyword: string;
};

const defaultItems = [
    { id: 1, keyword: '무한도전', imageUrl: '../public/tempImages/test2.jpeg' },
    { id: 2, keyword: 'GIF', imageUrl: '../public/tempImages/test1.jpeg' },
    { id: 3, keyword: '디지몬', imageUrl: '../public/tempImages/test3.jpeg' },
    { id: 4, keyword: '임시1', imageUrl: '../public/tempImages/test4.jpeg' },
    { id: 5, keyword: '임시2', imageUrl: '../public/tempImages/test5.jpeg' },
    { id: 6, keyword: '임시3', imageUrl: '../public/tempImages/test1.jpeg' },
];

export default function Category() {
    const [items, setItems] = useState<TItem[]>(defaultItems);
    const [activeItem, setActiveItem] = useState<TItem>();

    const sensors = useSensors(
        // useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        setActiveItem(items.find((item) => item.id === active.id));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;

        const activeItem = items.find((item) => item.id === active.id);
        const overItem = items.find((item) => item.id === over.id);

        if (!activeItem || !overItem) {
            return;
        }

        const activeIndex = items.findIndex((item) => item.id === active.id);
        const overIndex = items.findIndex((item) => item.id === over.id);

        if (activeIndex !== overIndex) {
            setItems((prev) => arrayMove<TItem>(prev, activeIndex, overIndex));
        }
        setActiveItem(undefined);
    };

    const handleDragCancel = () => {
        setActiveItem(undefined);
    };
    const handleButtonClick = () => {
        const itemIds = items.map((item) => item.id);
        alert(itemIds);
    };

    return (
        <main className="home__main">
            <div className="c-title">
                <h2>카테고리 관리</h2>
                <button className="button__light" onClick={handleButtonClick}>
                    변경사항 저장
                </button>
            </div>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <div className="c-category">
                        {items.map((item) => (
                            <CategoryItemWrapper key={item.id} item={item} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
                    {activeItem ? (
                        <CategoryItem item={activeItem} isDragging />
                    ) : null}
                </DragOverlay>
            </DndContext>
        </main>
    );
}