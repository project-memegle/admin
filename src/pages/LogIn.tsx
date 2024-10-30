import axios, { AxiosError, AxiosResponse } from 'axios';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import ValidationMessages from '../components/Validations/ValidationMessages';
import validateId from '../components/Validations/ValidateId';
import validateLogInPassword from '../components/Validations/ValidateLogInPassword';
import { handleApiError } from '../utils/handleApiError';
import { useAuth } from '../hooks/useAuth';

export default function LogIn() {
    const auth = useAuth();
    const [id, setId] = useState('');
    const [idError, setIdError] = useState(ValidationMessages.DEFAULT_ID);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(
        ValidationMessages.DEFAULT_PASSWORD
    );
    const [message, setMessage] = useState('');
    const onChangeId = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const error = validateId(value);
            setId(value);
            setIdError(error || ValidationMessages.DEFAULT_ID);
        },
        [setId, setIdError]
    );

    const onChangePassword = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            const error = validateLogInPassword(value);
            setPassword(value);
            setPasswordError(error || ValidationMessages.DEFAULT_PASSWORD);
        },
        [setPassword, setPasswordError]
    );

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            setMessage('');
            auth.login(() => {
                console.log('사용자 로그인😎');
            });
            axios
                .post('/login', {
                    id,
                    password,
                })
                .then((response: AxiosResponse) => {
                    console.log('response :', response);
                    setMessage(response.data.message);
                })
                .catch((error: AxiosError) => {
                    handleApiError(error as AxiosError, setMessage);
                });
        },
        [id, password, setMessage, auth]
    );

    return (
        <main className="home__main">
            <form className="c-login" onSubmit={onSubmit}>
                <div className="c-login__container">
                    <section>
                        <div className="c-login__section">
                            <p>{idError}</p>
                            <label htmlFor="id">아이디</label>
                            <input
                                className="c-login__input"
                                name="id"
                                id="id"
                                type="text"
                                placeholder="아이디를 입력해주세요"
                                value={id}
                                onChange={onChangeId}
                            />
                        </div>
                        <div className="c-login__section">
                            <p>{passwordError}</p>
                            <label htmlFor="password">비밀번호</label>
                            <input
                                className="c-login__input"
                                name="password"
                                type="password"
                                id="password"
                                placeholder="비밀번호를 입력해주세요"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                    </section>
                    <section className="c-login__button-section">
                        <button
                            className="button__rounded button__light"
                            type="submit" // Changed to submit
                        >
                            로그인
                        </button>
                        {message && <p>{message}</p>}
                    </section>
                </div>
            </form>
        </main>
    );
}
