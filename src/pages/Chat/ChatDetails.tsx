import { RandomChatList } from '../../utils/RandomChatMaker';
import ChatItem from './ChatItem';

export default function ChatDetails() {
    return (
        <div className="chat__detail-main">
            <form action="" className="c-chat__detail">
                <div className="c-chat-title__detail">
                    <section>
                        <button className="c-title__detail-button">
                            <i className="c-icon">arrow_back_ios</i>
                        </button>
                        <h2>문의 상세보기</h2>
                    </section>

                    <button> 해당 회원 상세보기</button>
                </div>
                {/* <div>
                    <RandomChatList length={1} />
                </div> */}
                <div className="c-chat">
                    <div className="main__container">
                        <section className="c-chat__section">
                            <ChatItem
                                content={'test1'}
                                date={'2 일 전'}
                                chatDirection="incoming"
                            />
                            <ChatItem
                                content={'test2'}
                                date={'2 일 전'}
                                chatDirection="outgoing"
                            />
                        </section>
                    </div>
                    <form action="" className="c-chat__input c-chat__shadow">
                        <label htmlFor="">chat</label>
                        <input
                            className="c-input__input"
                            type="text"
                            placeholder="메세지를 입력해주세요"
                        />
                        <button type="submit" name="Submit">
                            <i className="c-icon">send</i>
                        </button>
                    </form>
                </div>
            </form>
        </div>
    );
}
