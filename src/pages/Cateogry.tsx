import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SortableStressTest } from '../components/UI/DnD/SortableStressTest';

export default function Category() {
    return (
        <div className="home__main">
            <DndProvider backend={HTML5Backend}>
                {/* Your category components */}
                <SortableStressTest />
            </DndProvider>
        </div>
    );
}
