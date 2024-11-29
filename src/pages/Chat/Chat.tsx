import { useTranslation } from 'react-i18next';
import { RandomChatList } from '../../utils/RandomChatMaker';

export default function Chat() {
    const { t, i18n } = useTranslation();

    return (
        <main className="home__main">
            <div className="c-title">
                <h2>{t('INQUIRY_MANAGEMENT')}</h2>
            </div>
            <section className="c-chat__admin-section c-user__section">
                <table>
                    <caption>{t('INQUIRY_LIST')}</caption>
                    <thead>
                        <tr className="c-user__section-table-title">
                            <th>No.</th>
                            <th>{t('DEFAULT_CATEGORY')}</th>
                            <th>{t('DEFAULT_NICKNAME')}</th>
                            <th>{t('DEFAULT_CONTENT')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                        <td>홍길동</td>
                        <td>초콜렛</td>
                        <td>chocolate</td>
                    </tr> */}
                        <RandomChatList length={10} />
                    </tbody>
                </table>
            </section>
        </main>
    );
}
