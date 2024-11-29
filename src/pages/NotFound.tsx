import { useNavigate } from 'react-router-dom';
import NavBar from '../components/UI/NavBar/NavBar';
import icon from '@memegle/assets/images/png/ic_404.png';
import useCustomNavigate from '../hooks/useCustomNaviaget';
export default function NotFoundPage() {
    const navigate = useCustomNavigate();

    function naviteToHome() {
        navigate('/');
    }
    return (
        <>
            <NavBar />
            <main className="error__main">
                {/* <h1>존재하지 않는 페이지입니다</h1> */}
                <img src={icon} alt="icon" />
            </main>
        </>
    );
}
