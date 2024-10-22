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
            <form action="">
                <h1>유저 디테일</h1>
                <div>
                    <RandomUserList length={1} />
                </div>
                <div>
                    <div>
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="text"
                            id="password"
                            onChange={onChangePassword}
                        />
                    </div>
                    <button>비밀번호 변경</button>
                </div>

                <button>회원 삭제</button>
            </form>
        </div>
    );
}
