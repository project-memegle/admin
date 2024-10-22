import { RandomChatList } from '../../utils/RandomChatMaker';

export default function Chat() {
    return (
        <main className="home__main">
            <div className="c-title">
                <h2>문의 관리</h2>
            </div>
            <section className="c-chat__admin-section c-user__section">
                <table>
                    <caption>채팅 목록</caption>
                    <tr className="c-user__section-table-title">
                        <th>번호</th>
                        <th>닉네임</th>
                        <th>내용</th>
                    </tr>
                    {/* <tr>
                        <td>홍길동</td>
                        <td>초콜렛</td>
                        <td>chocolate</td>
                    </tr> */}
                    <RandomChatList length={10} />
                </table>
            </section>
        </main>
    );
}
