import { RandomUserList } from '../utils/RandomUserMaker';

export default function User() {
    return (
        <main className="home__main">
            <div className="c-title">
                <h2>회원 관리</h2>
            </div>
            <RandomUserList length={10} />
        </main>
    );
}
