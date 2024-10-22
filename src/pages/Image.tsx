import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import FakeData from '../data/mockData.json';

const fakeDataArray = FakeData.results;

export interface fakeDataItem {
    id: number;
    imageUrl: string;
    imageCategory: string;
}

export default function Image() {
    const navigate = useNavigate();

    function onClick(item: fakeDataItem) {
        return (e: MouseEvent<HTMLLIElement>) => {
            e.preventDefault();
            navigate(`image/${item.id}`, { state: item });
        };
    }

    return (
        <main className="home__main">
            <div className='c-title'>
                <h3>이미지 관리</h3>
            </div>
            <ul>
                {fakeDataArray.map((item: fakeDataItem) => (
                    <li key={item.id} onClick={onClick(item)}>
                        <img src={item.imageUrl} alt="" />
                    </li>
                ))}
            </ul>
        </main>
    );
}
