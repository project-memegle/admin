import { Outlet } from 'react-router-dom';
import NavBar from './components/UI/NavBar/NavBar';
function App() {
    return (
        <div className="body__container">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
