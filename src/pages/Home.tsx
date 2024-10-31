import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import LogIn from './LogIn';
import greetingLogo from '@memegle/assets/images/ic_greeting.png';
export default function HomePage() {
    const auth = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(!!auth.user);

    useEffect(() => {
        setIsLoggedIn(!!auth.user);
    }, [auth.user]);

    const logOutButtonClick = () => {
        auth.logout(() => {
            console.log('사용자 로그아웃😒');
            setIsLoggedIn(false);
        });
    };

    return (
        <>
            {!isLoggedIn ? (
                <LogIn />
            ) : (
                <main className="home__main">
                    <div className="c-title">
                        <h2>관리자 페이지</h2>
                        <button
                            onClick={logOutButtonClick}
                            className="button__light"
                        >
                            로그아웃
                        </button>
                    </div>
                    <section className="c-home__section">
                        <h3>관리자 계정으로 로그인 되었습니다</h3>
                        <div className="c-home__section-icon">
                            <img src={greetingLogo} alt="greeting" />
                        </div>
                    </section>
                </main>
            )}
        </>
    );
}
