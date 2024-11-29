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
                        <h2>회원 상세보기</h2>
                    </section>
                    <button className="button__light">
                        {t('BUTTON_SAVING_BUTTON')}
                    </button>
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
                    <div className="c-image__detail-section-item" ref={userRef}>
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
                </form>
            </section>
        </div>
    );
}
