import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    function navigateToHome() {
        navigate('/');
    }

    function navigateToImage() {
        navigate('/image');
    }
    function navigateToUser() {
        navigate('/user');
    }
    function navigateToChat() {
        navigate('/chat');
    }
    function navigateToCategory() {
        navigate('/category');
    }
    return (
        <nav className="c-navbar">
            <button onClick={navigateToHome}>
                <img className="logo" src="/src/assets/logo.svg" alt="logo" />
            </button>
            <ul>
                <li className="c-navbar__list">
                    <button onClick={navigateToImage}>
                        <div className="c-navbar__list-category">
                            <i className="c-icon">hide_image</i>
                            이미지 관리
                        </div>
                        <i className="c-icon">arrow_forward_ios</i>
                    </button>
                </li>
                <li className="c-navbar__list">
                    <button onClick={navigateToUser}>
                        <div className="c-navbar__list-category">
                            <i className="c-icon">group</i>
                            회원 관리
                        </div>
                        <i className="c-icon">arrow_forward_ios</i>
                    </button>
                </li>
                <li className="c-navbar__list">
                    <button onClick={navigateToChat}>
                        <div className="c-navbar__list-category">
                            <i className="c-icon">headset_mic</i>
                            문의 관리
                        </div>
                        <i className="c-icon">arrow_forward_ios</i>
                    </button>
                </li>
                <li className="c-navbar__list">
                    <button onClick={navigateToCategory}>
                        <div className="c-navbar__list-category">
                            <i className="c-icon">category</i>
                            카테고리 관리
                        </div>
                        <i className="c-icon">arrow_forward_ios</i>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
