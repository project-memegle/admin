import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import validateId from '../components/Validations/ValidateId';
import validateLogInPassword from '../components/Validations/ValidateLogInPassword';
import { errorInputCheck } from '../utils/Event/errorInputCheck';
import { resetErrors } from '../utils/Event/resetErrors';
import handleInputChange from '../utils/Event/handleInputChange';
import getValidationMessages from '../components/Validations/ValidationMessages';
import { logIn } from '../services/LogInService';
import { LogInRequestDTO } from '../services/dto/LogInDto';
import { useAuth } from '../components/auth/ProvideAuth';
import useCustomNavigate from '../hooks/useCustomNaviaget';

export default function LogIn() {
    const { t } = useTranslation();
    const auth = useAuth();
    const navigate = useCustomNavigate();
    const ValidationMessages = getValidationMessages();

    const DEFAULT_ID = ValidationMessages.DEFAULT_ID;
    const DEFAULT_PASSWORD = ValidationMessages.DEFAULT_PASSWORD;

    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [id, setId] = useState('testloginid3');
    const [password, setPassword] = useState('qwerQ!1234');
    const [message, setMessage] = useState('');

    const idInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const onChangeId = useCallback(
        handleInputChange(setId, setIdError, validateId, () => {
            setMessage('');
        }),
        []
    );

    const onChangePassword = useCallback(
        handleInputChange(
            setPassword,
            setPasswordError,
            validateLogInPassword,
            () => {
                setMessage('');
            }
        ),
        []
    );

    useEffect(() => {
        if (id && password) {
            resetErrors(setIdError, setPasswordError);
        }
    }, []);

    const onSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setMessage('');
            if (idError || !id) {
                errorInputCheck(idInputRef.current);
                return;
            }
            if (passwordError || !password) {
                errorInputCheck(passwordInputRef.current);
                return;
            }

            if (id && password) {
                resetErrors(setIdError, setPasswordError);
                try {
                    const userData: LogInRequestDTO = {
                        loginId: id,
                        password: password,
                    };
                    await logIn(userData);
                    auth.login(() => {
                        navigate('/');
                    });
                } catch (error) {
                    if (error === 40401) {
                        setMessage(ValidationMessages.API_NONEXIST_ID);
                        return;
                    }
                    if (error === 40102) {
                        setMessage(ValidationMessages.API_PASSWORD_MISMATCH);
                        return;
                    }
                    setMessage(ValidationMessages.API_UNKNOWN_ERROR);
                }
            }
        },
        [
            id,
            password,
            setMessage,
            auth,
            idError,
            passwordError,
            ValidationMessages,
        ]
    );

    return (
        <main className="home__main">
            <form className="c-login" onSubmit={onSubmit}>
                <div className="c-login__container">
                    <section>
                        <div className="c-login__section">
                            {idError ? (
                                <p className="error-message">{idError}</p>
                            ) : (
                                <p>{DEFAULT_ID}</p>
                            )}
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
                            {passwordError ? (
                                <p className="error-message">{passwordError}</p>
                            ) : (
                                <p>{DEFAULT_PASSWORD}</p>
                            )}
                            <label htmlFor="password">{DEFAULT_PASSWORD}</label>
                            <input
                                autoComplete="on"
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
                            {t('DEFAULT_LOGIN')}
                        </button>
                        {message && <p className="font-error">{message}</p>}
                    </section>
                </div>
            </form>
        </main>
    );
}
