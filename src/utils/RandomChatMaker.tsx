import React, { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';

export type RandomUserDetailProps = {
    id: number;
    content: string;
};

const RandomUser: React.FC<RandomUserDetailProps> = ({ id, content }) => {
    const navigate = useNavigate();

    function navigateToDetail(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate(`chat/${id}`);
    }

    return (
        <button onClick={navigateToDetail}>
            <div
                style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '10px',
                }}
            >
                {' '}
                <p>
                    <strong>ID:</strong> {id}
                </p>
                <p>
                    <strong>content:</strong> {content}
                </p>
            </div>
        </button>
    );
};

const rand1 = Math.random();

const generateFakeUser = () => ({
    id: rand1,
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
        <div>
            {chattings.map((chatting, index) => (
                <RandomUser
                    key={index}
                    id={chatting.id}
                    content={chatting.content}
                />
            ))}
        </div>
    );
};
