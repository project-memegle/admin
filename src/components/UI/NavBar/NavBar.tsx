import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@memegle/assets/logo/svg/logo.svg';

export default function NavBar() {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

    function navigateTo(path: string, menu: string) {
        navigate(path);
        setSelectedMenu(menu);
    }

    return (
        <nav className="c-navbar">
            <button onClick={() => navigateTo('/', 'home')}>
                <img className="logo" src={logo} alt="logo" />
            </button>
            <ul>
                <li
                    className={`c-navbar__list ${
                        selectedMenu === 'image' ? 'selected' : ''
                    }`}
                >
                    <button onClick={() => navigateTo('/image', 'image')}>
                        <div className="c-navbar__list-category">
                            이미지 관리
                        </div>
                    </button>
                </li>
                <li
                    className={`c-navbar__list ${
                        selectedMenu === 'user' ? 'selected' : ''
                    }`}
                >
                    <button onClick={() => navigateTo('/user', 'user')}>
                        <div className="c-navbar__list-category">회원 관리</div>
                    </button>
                </li>
                <li
                    className={`c-navbar__list ${
                        selectedMenu === 'chat' ? 'selected' : ''
                    }`}
                >
                    <button onClick={() => navigateTo('/chat', 'chat')}>
                        <div className="c-navbar__list-category">문의 관리</div>
                    </button>
                </li>
                <li
                    className={`c-navbar__list ${
                        selectedMenu === 'category' ? 'selected' : ''
                    }`}
                >
                    <button onClick={() => navigateTo('/category', 'category')}>
                        <div className="c-navbar__list-category">
                            카테고리 관리
                        </div>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
