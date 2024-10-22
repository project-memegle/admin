import { RandomChatList } from '../utils/RandomChatMaker';

export default function Chat() {
    return (
        <main className="home__main">
            <h1>채팅목록</h1>
            <RandomChatList length={10} />
        </main>
    );
}
