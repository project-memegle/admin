import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SortableStressTest } from '../components/UI/DnD/SortableStressTest';

export default function Category() {
    return (
        <main className="home__main">
            <div className="c-title">
                <h2>카테고리 관리</h2>
            </div>
            <DndProvider backend={HTML5Backend}>
                {/* Your category components */}
                <SortableStressTest />
            </DndProvider>
            <div className="c-image__detail-section-button">
                <button>변경사항 저장</button>
            </div>
        </main>
    );
}
