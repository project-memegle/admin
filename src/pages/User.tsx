import { useTranslation } from 'react-i18next';
import { RandomUserList } from '../utils/RandomUserMaker';

export default function User() {
    const { t } = useTranslation();
    return (
        <main className="home__main c-user">
            <div className="c-title">
                <h2>{t('USER_MANAGEMENT')}</h2>
            </div>
            <section className="c-user__section">
                <table>
                    <caption>회원 목록</caption>
                    <thead>
                        <tr className="c-user__section-table-title">
                            <th>No.</th>
                            <th>{t('DEFAULT_ID')}</th>
                            <th>{t('DEFAULT_NICKNAME')}</th>
                            <th>{t('DEFAULT_NAME')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>홍길동</td>
                            <td>초콜렛</td>
                            <td>chocolate</td>
                        </tr> */}
                        <RandomUserList length={10} />
                    </tbody>
                </table>
            </section>
        </main>
    );
}
