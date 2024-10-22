import { ChangeEvent, useCallback, useState } from 'react';
import validateLogInPassword from '../components/UI/Validations/ValidateLogInPassword';
import { RandomUserList } from '../utils/RandomUserMaker';

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

    return (
        <div className="home__main">
            <section>
                <div className="c-title__detail">
                    <button className="c-title__detail-button">
                        <i className="c-icon">arrow_back_ios</i>
                    </button>
                    <h3>회원 상세보기</h3>
                </div>
                <form action="" className="c-image__detail-section">
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">이름</label>
                        <input type="text" value="홍길동" />
                    </div>
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">닉네임</label>
                        <input type="text" value="초콜렛" />
                    </div>{' '}
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">아이디</label>
                        <input type="text" value="chocolate" />
                    </div>
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">비밀번호</label>
                        <input type="text" />
                    </div>
                    <div className="c-image__detail-section-button">
                        <button>변경사항 저장</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
