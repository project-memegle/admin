import { ChangeEvent, useCallback, useState } from 'react';
import validateLogInPassword from '../components/UI/Validations/ValidateLogInPassword';

export default function UserDetails() {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onChangePassword = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const error = validateLogInPassword(value);
            setPassword(value);
            setPasswordError(error);
        },
        [setPassword, setPasswordError]
    );

    const [name, setName] = useState('홍길동');
    const [nickname, setNickname] = useState('초콜렛');
    const [userId, setUserId] = useState('chocolate');

    return (
        <div className="home__main">
            <section>
                <div className="c-title">
                    <section className="c-title__detail">
                        <button className="c-title__detail-button">
                            <i className="c-icon">arrow_back_ios</i>
                        </button>
                        <h2>회원 상세보기</h2>
                    </section>
                    <button className="button__light">변경사항 저장</button>
                </div>
                <form action="" className="c-image__detail-section">
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">이름</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">닉네임</label>
                        <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                    </div>
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">아이디</label>
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">비밀번호</label>
                        <input
                            type="text"
                            value={password}
                            onChange={onChangePassword}
                        />
                        {passwordError && <span>{passwordError}</span>}
                    </div>
                    <div className="c-image__detail-section-button">
                        <button>변경사항 저장</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
