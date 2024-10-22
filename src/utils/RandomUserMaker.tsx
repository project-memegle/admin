import React, { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';

export type RandomUserDetailProps = {
    nickname: string;
    id: number;
};

const RandomUser: React.FC<RandomUserDetailProps> = ({ nickname, id }) => {
    const navigate = useNavigate();

    function navigateToDetail(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate(`user/${id}`);
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
                <p>
                    <strong>Nickname:</strong> {nickname}
                </p>
                <p>
                    <strong>ID:</strong> {id}
                </p>
            </div>
        </button>
    );
};
const rand1 = Math.random();

const generateFakeUser = () => ({
    nickname: faker.internet.userName(),
    id: rand1,
});

type RandomUserListProps = {
    length: number;
};

export const RandomUserList: React.FC<RandomUserListProps> = ({ length }) => {
    const users = useMemo(
        () => Array.from({ length }, generateFakeUser),
        [length]
    );

    return (
        <div>
            {users.map((user, index) => (
                <RandomUser key={index} nickname={user.nickname} id={user.id} />
            ))}
        </div>
    );
};
