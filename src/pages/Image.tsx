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
            navigate(`/image/${item.id}`, { state: item });
        };
    }

    return (
        <main className="home__main">
            <div className="c-title">
                <h2>이미지 관리</h2>
            </div>
            <section className="c-image__section">
                {fakeDataArray.map((item: fakeDataItem) => (
                    <article
                        key={item.id}
                        onClick={onClick(item)}
                        className="c-image__section-item"
                    >
                        <img src={item.imageUrl} alt="" />
                    </article>
                ))}
            </section>
        </main>
    );
}
