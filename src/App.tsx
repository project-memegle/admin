import { Outlet } from 'react-router-dom';
import NavBar from './components/UI/NavBar/NavBar';
import Header from './components/UI/Header/Header';
function App() {
    return (
        <div className="body__container">
            <Header />
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
