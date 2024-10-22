import React, { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';

export type RandomUserDetailProps = {
    name: string;
    nickname: string;
    id: string;
};

const RandomUser: React.FC<RandomUserDetailProps> = ({
    name,
    nickname,
    id,
}) => {
    const navigate = useNavigate();

    function navigateToDetail(e: React.MouseEvent<HTMLTableRowElement>) {
        e.preventDefault();
        navigate(`user/${id}`);
    }

    return (
        <>
            <tr className="c-user__section-table-content" onClick={navigateToDetail}>
                <td>{name}</td>
                <td>{nickname}</td>
                <td>{id}</td>
            </tr>
        </>
    );
};

const generateFakeUser = () => ({
    name: faker.internet.displayName(),
    nickname: faker.internet.userName(),
    id: faker.internet.color(),
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
        <>
            {users.map((user, index) => (
                <RandomUser
                    key={index}
                    nickname={user.nickname}
                    id={user.id}
                    name={user.name}
                />
            ))}
        </>
    );
};
