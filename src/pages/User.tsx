import { RandomUserList } from '../utils/RandomUserMaker';

export default function User() {
    return (
        <main className="home__main c-user">
            <div className="c-title">
                <h2>회원 관리</h2>
            </div>
            <section className="c-user__section">
                <table>
                    <caption>회원 목록</caption>
                    <thead>
                        <tr className="c-user__section-table-title">
                            <th>이름</th>
                            <th>닉네임</th>
                            <th>아이디</th>
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
