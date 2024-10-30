import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import LogIn from './LogIn';

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
                    </div>
                    <section className="c-home__section">
                        <p>관리자 계정으로 로그인 되었습니다</p>
                        <button
                            onClick={logOutButtonClick}
                            className="button__light"
                        >
                            로그아웃
                        </button>
                    </section>
                </main>
            )}
        </>
    );
}
