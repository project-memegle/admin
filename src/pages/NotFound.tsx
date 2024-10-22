import { useNavigate } from 'react-router-dom';
import NavBar from '../components/UI/NavBar/NavBar';
import icon from '@memegle/assets/images/ic_404.png';
export default function NotFoundPage() {
    const navigate = useNavigate();

    function naviteToHome() {
        navigate('/');
    }
    return (
        <>
            <NavBar />
            <main className='error__main'>
                <img src={icon} alt="icon" />
            </main>
        </>
    );
}
