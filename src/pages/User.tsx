import { RandomUserList } from '../utils/RandomUserMaker';

export default function User() {
    return (
        <main className="home__main">
            <h1>User</h1>
            <RandomUserList length={10} />
        </main>
    );
}
