import { useState, useEffect } from 'react';
import LogIn from './LogIn';
import greetingLogo from '@memegle/assets/images/png/ic_greeting.png';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../components/auth/ProvideAuth';
export default function HomePage() {
    const auth = useAuth();
    const { t } = useTranslation();

    const logOutButtonClick = () => {
        auth.logout();
    };

    useEffect(() => {
        console.log(auth.isAuthenticated);
    }, [auth.isAuthenticated]);

    return (
        <>
            {!auth.isAuthenticated ? (
                <LogIn />
            ) : (
                <main className="home__main">
                    <div className="c-title">
                        <h2>{t('DEFAULT_ADMIN')}</h2>
                        <button
                            onClick={logOutButtonClick}
                            className="button__light"
                        >
                            {t('DEFAULT_SIGNOUT')}
                        </button>
                    </div>
                    <section className="c-home__section">
                        <h3>{t('LOGIN_SUCCESS_ADMIN')}</h3>
                        <div className="c-home__section-icon">
                            <img src={greetingLogo} alt="greeting" />
                        </div>
                    </section>
                </main>
            )}
        </>
    );
}
