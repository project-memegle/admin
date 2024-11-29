import { useEffect, useState } from 'react';
import logo from '@memegle/assets/logo/svg/logo.svg';
import { getSessionStorages } from '../../../utils/sessionStorage';
import StorageKeyword from '../../../Constant/StorageKeyword';
import { setLocalStorage } from '../../../utils/Storage/localStorage';
import { useTranslation } from 'react-i18next';
import useCustomNavigate from '../../../hooks/useCustomNaviaget';

export default function NavBar() {
    const navigate = useCustomNavigate();
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
    const [language, setLanguage] = useState<string>('ko');
    const { t, i18n } = useTranslation();

    function navigateTo(path: string, menu: string) {
        navigate(path);
        setSelectedMenu(menu);
    }
    useEffect(() => {
        const language = getSessionStorages(StorageKeyword.LANGUAGE);
        if (language) {
            setLanguage(language);
        }
    }, [setLanguage]);

    const handleChangeLanguage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const lang = event.target.checked ? 'ko' : 'en';
        i18n.changeLanguage(lang);
        setLocalStorage({ key: StorageKeyword.LANGUAGE, value: lang });
        setLanguage(lang);
    };
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
                            {t('IMAGE_MANAGEMENT')}
                        </div>
                    </button>
                </li>
                <li
                    className={`c-navbar__list ${
                        selectedMenu === 'user' ? 'selected' : ''
                    }`}
                >
                    <button onClick={() => navigateTo('/user', 'user')}>
                        <div className="c-navbar__list-category">
                            {t('USER_MANAGEMENT')}
                        </div>
                    </button>
                </li>
                <li
                    className={`c-navbar__list ${
                        selectedMenu === 'chat' ? 'selected' : ''
                    }`}
                >
                    <button onClick={() => navigateTo('/chat', 'chat')}>
                        <div className="c-navbar__list-category">
                            {t('INQUIRY_MANAGEMENT')}
                        </div>
                    </button>
                </li>
                <li
                    className={`c-navbar__list ${
                        selectedMenu === 'category' ? 'selected' : ''
                    }`}
                >
                    <button onClick={() => navigateTo('/category', 'category')}>
                        <div className="c-navbar__list-category">
                            {t('CATEOGRY_MANAGEMENT')}
                        </div>
                    </button>
                </li>
            </ul>
            <div className="c-navbar__switch">
                <input
                    id="language-toggle"
                    type="checkbox"
                    onChange={handleChangeLanguage}
                    checked={i18n.language === 'ko'}
                />
                <label htmlFor="language-toggle">
                    <span>KR</span>
                    <span>EN</span>
                </label>
            </div>
        </nav>
    );
}
