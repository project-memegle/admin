import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    function navigateToLogIn() {
        navigate('/login');
    }
    return (
        <header className='c-header'>
            <button onClick={navigateToLogIn}>관리자 로그인</button>
        </header>
    );
}
