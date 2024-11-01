import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@memegle/assets/logo/svg/logo.svg';

interface Header {
    path: string;
    menu: string;
}

export default function Header() {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

    function navigateTo({ path, menu }: Header) {
        navigate(path);
        setSelectedMenu(menu);
    }

    return (
        <header className="c-header">
            <button onClick={() => navigateTo({ path: '/', menu: 'home' })}>
                <img className="logo" src={logo} alt="logo" />
            </button>
            <ul>
                <li
                    className={`c-navbar__list ${
                        selectedMenu === 'image' ? 'selected' : ''
                    }`}
                >
                    <button
                        onClick={() =>
                            navigateTo({ path: '/image', menu: 'image' })
                        }
                    >
                        <div className="c-navbar__list-category">이미지</div>
                    </button>
                </li>
            </ul>
        </header>
    );
}
