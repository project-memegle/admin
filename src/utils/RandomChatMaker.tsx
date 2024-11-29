import { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';

export type RandomUserDetailProps = {
    id: string;
    content: string;
    index: number;
    category: string;
    nickname: string;
};

const RandomUser: React.FC<RandomUserDetailProps> = ({
    id,
    content,
    index,
    category,
}) => {
    const navigate = useNavigate();

    function navigateToDetail(e: React.MouseEvent<HTMLTableRowElement>) {
        e.preventDefault();
        navigate(`/chat/${id}`);
    }

    return (
        <>
            <tr
                className="c-user__section-table-content"
                onClick={navigateToDetail}
            >
                <td>{index}</td>
                <td>{category}</td>
                <td>{id}</td>
                <td>{content}</td>
            </tr>
        </>
    );
};

const generateFakeUser = () => ({
    id: faker.internet.userName(), // Generates a unique random integer between 0 and 100
    nickname: faker.internet.userName(),
    category: faker.lorem.word(),
    content: faker.lorem.sentence(),
});

type RandomChattingListProps = {
    length: number;
};

export const RandomChatList: React.FC<RandomChattingListProps> = ({
    length,
}) => {
    const chattings = useMemo(
        () => Array.from({ length }, generateFakeUser),
        [length]
    );

    return (
        <>
            {chattings.map((chatting, index) => (
                <RandomUser
                    key={index}
                    category={chatting.category}
                    id={chatting.id}
                    nickname={chatting.nickname}
                    content={chatting.content}
                    index={index + 1}
                />
            ))}
        </>
    );
};
