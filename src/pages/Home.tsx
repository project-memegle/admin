import axios, { AxiosError, AxiosResponse } from 'axios';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import ValidationMessages from '../components/Validations/ValidationMessages';
import { useNavigate } from 'react-router-dom';
import validateId from '../components/Validations/ValidateId';
import validateLogInPassword from '../components/Validations/ValidateLogInPassword';

export default function HomePage() {
    const navigate = useNavigate();

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
                    console.log(error.response);
                    if (axios.isAxiosError(error)) {
                        switch (error.response?.status) {
                            case 40000:
                                setMessage(ValidationMessages.LOGIN_FAILED);
                                break;
                            case 40001:
                                setMessage(ValidationMessages.INVALID_FORM);
                                break;
                            case 50000:
                                setMessage(ValidationMessages.SERVER_ERROR);
                                break;
                            default:
                                setMessage(ValidationMessages.UNKNOWN_ERROR);
                                break;
                        }
                    } else {
                        setMessage(ValidationMessages.UNKNOWN_ERROR);
                    }
                });
        },
        [id, password, setMessage]
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
                            type="submit"
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
