import { AxiosError, AxiosResponse } from 'axios';
import { FormEvent, useCallback, useRef, useState } from 'react';
import ValidationMessages from '../components/Validations/ValidationMessages';
import validateId from '../components/Validations/ValidateId';
import validateLogInPassword from '../components/Validations/ValidateLogInPassword';
import { handleApiError } from '../utils/API/handleApiError';
import { useAuth } from '../hooks/useAuth';
import { post } from '../utils/API/fetcher';
import { errorInputCheck } from '../utils/Event/errorInputCheck';
import { resetErrors } from '../utils/Event/resetErrors';
import handleInputChange from '../utils/Event/handleInputChange';

export default function LogIn() {
    const auth = useAuth();

    const DEFAULT_ID = ValidationMessages.DEFAULT_ID;
    const DEFAULT_PASSWORD = ValidationMessages.DEFAULT_PASSWORD;

    const [idError, setIdError] = useState(DEFAULT_ID);
    const [passwordError, setPasswordError] = useState(DEFAULT_PASSWORD);

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const idInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const onChangeId = useCallback(
        handleInputChange(setId, setIdError, validateId),
        []
    );

    const onChangePassword = useCallback(
        handleInputChange(setPassword, setPasswordError, validateLogInPassword),
        []
    );

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            setMessage('');

            if (idError || passwordError) {
                if (idError) errorInputCheck(idInputRef.current);
                else if (passwordError)
                    errorInputCheck(passwordInputRef.current);
                return;
            }
            if (id && password) {
                resetErrors(setIdError, setPasswordError);
                auth.login(() => {
                    console.log('사용자 로그인😎');
                });
                post('/login', {
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
            }
        },
        [id, password, setMessage, auth]
    );

    return (
        <main className="home__main">
            <form className="c-login" onSubmit={onSubmit}>
                <div className="c-login__container">
                    <section>
                        <div className="c-login__section">
                            <p>{idError ? idError : DEFAULT_ID}</p>
                            <label htmlFor="id">{DEFAULT_ID}</label>
                            <input
                                ref={idInputRef}
                                className="c-login__input"
                                name="id"
                                id="id"
                                type="text"
                                placeholder={ValidationMessages.REQUIRED_ID}
                                value={id}
                                onChange={onChangeId}
                            />
                        </div>
                        <div className="c-login__section">
                            <p>
                                {passwordError
                                    ? passwordError
                                    : DEFAULT_PASSWORD}
                            </p>
                            <label htmlFor="password">{DEFAULT_PASSWORD}</label>
                            <input
                                ref={passwordInputRef}
                                className="c-login__input"
                                name="password"
                                type="password"
                                id="password"
                                placeholder={
                                    ValidationMessages.REQUIRED_PASSWORD
                                }
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
