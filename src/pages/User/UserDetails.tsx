import { useCallback, useState } from 'react';
import validateLogInPassword from '../../components/Validations/ValidateLogInPassword';
import handleInputChange from '../../utils/Event/handleInputChange';
import { useParams } from 'react-router-dom';
import { useScrollToRef } from '../../hooks/useScrollToRef';
import useNavigateToBack from '../../hooks/useNavigateToBack';
import { useTranslation } from 'react-i18next';

export default function UserDetails() {
    const { id } = useParams<{ id: string }>();
    const userRef = useScrollToRef<HTMLDivElement>(id);
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onChangePassword = useCallback(
        handleInputChange(setPassword, setPasswordError, validateLogInPassword),
        []
    );

    const onChangeButton = useNavigateToBack();

    const [name, setName] = useState('홍길동');
    const [nickname, setNickname] = useState('초콜렛');
    const [userId, setUserId] = useState('chocolate');

    return (
        <div className="home__main">
            <section>
                <div className="c-title">
                    <section className="c-title__detail">
                        <button
                            className="c-title__detail-button"
                            type="button"
                            onClick={onChangeButton}
                        >
                            <i className="c-icon">arrow_back_ios</i>
                        </button>
                        <h2>{t('DEFAULT_USER_DETAIL')}</h2>
                    </section>
                    <button className="button__light">
                        {t('BUTTON_SAVING_BUTTON')}
                    </button>
                </div>
                <form action="" className="c-image__detail-section">
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">{t('DEFAULT_NAME')}</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">{t('DEFAULT_NICKNAME')}</label>
                        <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                    </div>
                    <div className="c-image__detail-section-item" ref={userRef}>
                        <label htmlFor="">{t('DEFAULT_ID')}</label>
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                    <div className="c-image__detail-section-item">
                        <label htmlFor="">{t('DEFAULT_PASSWORD')}</label>
                        <input
                            type="text"
                            value={password}
                            onChange={onChangePassword}
                        />
                        {passwordError && <span>{passwordError}</span>}
                    </div>
                    <div className="c-image__detail-section-item" ref={userRef}>
                        <label htmlFor="">{t('INQUIRY_LIST')}</label>
                        <input type="text" value="-" />
                    </div>
                    <div className="c-image__detail-section-item" ref={userRef}>
                        <label htmlFor="">{t('IMAGE_UPLOAD_LIST')}</label>
                        <input type="text" value="-" />
                    </div>
                </form>
            </section>
        </div>
    );
}
