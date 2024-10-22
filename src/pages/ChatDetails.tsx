import { RandomChatList } from '../utils/RandomChatMaker';

export default function ChatDetails() {
    return (
        <div className="home__main">
            <form action="">
                <h1>채팅</h1>
                <div>
                    <RandomChatList length={1} />
                </div>
                <div>
                    <div>
                        <label htmlFor="chatting">채팅</label>
                        <input type="text" id="chatting" />
                    </div>
                    <button>채팅 보내기</button>
                </div>
            </form>
        </div>
    );
}
