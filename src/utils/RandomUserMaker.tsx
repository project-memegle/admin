import { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import useCustomNavigate from '../hooks/useCustomNavigate';

export type RandomUserDetailProps = {
    name: string;
    nickname: string;
    id: string;
    index: number;
};

const RandomUser: React.FC<RandomUserDetailProps> = ({
    name,
    nickname,
    id,
    index,
}) => {
    const navigate = useCustomNavigate();

    function navigateToDetail(e: React.MouseEvent<HTMLTableRowElement>) {
        e.preventDefault();
        navigate(`/user/${id}`);
    }

    return (
        <>
            <tr
                className="c-user__section-table-content"
                onClick={navigateToDetail}
            >
                <td>{index}</td>
                <td>{id}</td>
                <td>{nickname}</td>
                <td>{name}</td>
            </tr>
        </>
    );
};

const generateFakeUser = () => ({
    name: faker.name.fullName(),
    nickname: faker.internet.userName(),
    id: Math.random().toString(36).substring(2),
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
                    index={index + 1}
                    nickname={user.nickname}
                    id={user.id}
                    name={user.name}
                />
            ))}
        </>
    );
};
