import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import image1 from '@memegle/assets/images/jpeg/test1.jpeg';
import image2 from '@memegle/assets/images/jpeg/test2.jpeg';
import image3 from '@memegle/assets/images/jpeg/test3.jpeg';
import image4 from '@memegle/assets/images/jpeg/test4.jpeg';
import image5 from '@memegle/assets/images/jpeg/test5.jpeg';
import image6 from '@memegle/assets/images/jpeg/test6.jpeg';
import image7 from '@memegle/assets/images/jpeg/test7.jpeg';
import image8 from '@memegle/assets/images/jpeg/test8.jpeg';
import image9 from '@memegle/assets/images/jpeg/test9.jpeg';
import image10 from '@memegle/assets/images/jpeg/test10.jpeg';
import image11 from '@memegle/assets/images/jpeg/test11.jpeg';

export const FakeData = {
    success: true,
    status: 'OK',
    code: 200,
    message: 'Data retrieved successfully',
    results: [
        {
            id: 1,
            imageUrl: image2,
            imageCategory: 'mudo',
            createdAt: '2024-08-15T10:25:30.673Z',
            modifiedAt: '2024-08-15T10:25:30.673Z',
        },
        {
            id: 2,
            imageUrl: image1,
            imageCategory: 'digiMon',
            createdAt: '2024-08-30T14:18:50.673Z',
            modifiedAt: '2024-08-30T14:18:50.673Z',
        },
        {
            id: 3,
            imageUrl: image3,
            imageCategory: 'favorite',
            createdAt: '2024-09-02T08:12:25.673Z',
            modifiedAt: '2024-09-02T08:12:25.673Z',
        },
        {
            id: 4,
            imageUrl: image4,
            imageCategory: 'gif',
            createdAt: '2024-09-01T11:05:40.673Z',
            modifiedAt: '2024-09-01T11:05:40.673Z',
        },
        {
            id: 5,
            imageUrl: image5,
            imageCategory: 'temp1',
            createdAt: '2024-07-25T12:33:45.673Z',
            modifiedAt: '2024-07-25T12:33:45.673Z',
        },
        {
            id: 6,
            imageUrl: image6,
            imageCategory: 'temp2',
            createdAt: '2024-07-18T15:20:25.673Z',
            modifiedAt: '2024-07-18T15:20:25.673Z',
        },
        {
            id: 7,
            imageUrl: image7,
            imageCategory: 'mudo',
            createdAt: '2024-08-10T09:45:55.673Z',
            modifiedAt: '2024-08-10T09:45:55.673Z',
        },
        {
            id: 8,
            imageUrl: image8,
            imageCategory: 'digiMon',
            createdAt: '2024-07-28T17:10:35.673Z',
            modifiedAt: '2024-07-28T17:10:35.673Z',
        },
        {
            id: 9,
            imageUrl: image9,
            imageCategory: 'favorite',
            createdAt: '2024-06-15T07:22:10.673Z',
            modifiedAt: '2024-06-15T07:22:10.673Z',
        },
        {
            id: 10,
            imageUrl: image2,
            imageCategory: 'gif',
            createdAt: '2024-07-19T13:33:30.673Z',
            modifiedAt: '2024-07-19T13:33:30.673Z',
        },
        {
            id: 11,
            imageUrl: image10,
            imageCategory: 'temp1',
            createdAt: '2024-09-10T11:15:20.673Z',
            modifiedAt: '2024-09-10T11:15:20.673Z',
        },
        {
            id: 12,
            imageUrl: image11,
            imageCategory: 'temp2',
            createdAt: '2024-09-11T14:10:55.673Z',
            modifiedAt: '2024-09-11T14:10:55.673Z',
        },
        {
            id: 13,
            imageUrl: image6,
            imageCategory: 'mudo',
            createdAt: '2024-08-09T08:42:35.673Z',
            modifiedAt: '2024-08-09T08:42:35.673Z',
        },
        {
            id: 14,
            imageUrl: image7,
            imageCategory: 'digiMon',
            createdAt: '2024-07-15T16:22:10.673Z',
            modifiedAt: '2024-07-15T16:22:10.673Z',
        },
        {
            id: 15,
            imageUrl: image8,
            imageCategory: 'favorite',
            createdAt: '2024-07-25T09:50:40.673Z',
            modifiedAt: '2024-07-25T09:50:40.673Z',
        },
        {
            id: 16,
            imageUrl: image9,
            imageCategory: 'gif',
            createdAt: '2024-06-25T13:30:20.673Z',
            modifiedAt: '2024-06-25T13:30:20.673Z',
        },
        {
            id: 17,
            imageUrl: image10,
            imageCategory: 'temp1',
            createdAt: '2024-09-02T12:45:35.673Z',
            modifiedAt: '2024-09-02T12:45:35.673Z',
        },
        {
            id: 18,
            imageUrl: image3,
            imageCategory: 'temp2',
            createdAt: '2024-07-05T10:20:25.673Z',
            modifiedAt: '2024-07-05T10:20:25.673Z',
        },
        {
            id: 19,
            imageUrl: image4,
            imageCategory: 'mudo',
            createdAt: '2024-06-30T08:35:40.673Z',
            modifiedAt: '2024-06-30T08:35:40.673Z',
        },
        {
            id: 20,
            imageUrl: image8,
            imageCategory: 'digiMon',
            createdAt: '2024-08-11T12:12:15.673Z',
            modifiedAt: '2024-08-11T12:12:15.673Z',
        },
    ],
};

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
