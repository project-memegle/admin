import { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';

export type RandomUserDetailProps = {
    id: number;
    content: string;
    index: number;
};

const RandomUser: React.FC<RandomUserDetailProps> = ({
    id,
    content,
    index,
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
                <td>{id}</td>
                <td>{content}</td>
            </tr>
        </>
    );
};

const generateFakeUser = () => ({
    id: Math.floor(Math.random() * 101), // Generates a unique random integer between 0 and 100
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
                    id={chatting.id}
                    content={chatting.content}
                    index={index}
                />
            ))}
        </>
    );
};
