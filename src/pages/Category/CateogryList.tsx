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
import CategoryItemWrapper from '../../components/UI/Category/CategoryItemWrapper';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import CategoryItem from '../../components/UI/Category/CategoryItem';
import { useEffect, useState } from 'react';
import { getCategorylist } from '../../services/CategoryService';
import { CategoryResultSectionDTO } from '../../services/dto/ResultDto';
import { useMockCategoryList } from '../../mockData/__CategoryList';
import { useTranslation } from 'react-i18next';

export type TItem = {
    id: number;
    imageUrl: string;
    keyword: string;
};

export default function CateogryList() {
    const mockCategoryList = useMockCategoryList();
    const [items, setItems] = useState<TItem[]>([]);
    const { t } = useTranslation();
    const [activeItem, setActiveItem] = useState<TItem>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [categoryList, setCategoryList] =
        useState<CategoryResultSectionDTO | null>(null);
    const sensors = useSensors(
        // useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        })
    );

    useEffect(() => {
        setItems(
            mockCategoryList.results.map((item) => ({
                id: item.id,
                keyword: item.imageCategory,
                imageUrl: item.titleImageUrl,
            }))
        );
    }, [mockCategoryList]);
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

    async function fetchCategoryList() {
        try {
            await getCategorylist({
                setLoading,
                setResultData: setCategoryList,
                setError,
            });
        } catch (error) {
            console.error('Error fetching category list:', error);
        }
    }

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

    const navigate = useCustomNavigate();
    const onClickSetting = () => {
        navigate('/category/setting');
    };

    return (
        <>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <div className="c-category">
                        <article
                            className="c-category__item c-category__item-add"
                            onClick={onClickSetting}
                        >
                            <p className="c-category__item-title">
                                <i className="c-icon">add_circle</i>
                            </p>
                        </article>
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
        </>
    );
}
