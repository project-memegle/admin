import { useLocation } from 'react-router-dom';
import FakeData from '../data/mockData.json';
import { fakeDataItem } from './Image';
import Dropdown from '../components/UI/Dropdown';
import { useState, useEffect } from 'react';

const fakeDataArray = FakeData.results;

export default function ImageDetails() {
    const location = useLocation();
    const { id, imageUrl, imageCategory } = location.state as fakeDataItem;
    const [category, setCategory] = useState(imageCategory);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const imageCategories = fakeDataArray.map((item) => item.imageCategory);
        setCategories(imageCategories);
    }, []);

    function handleImageApprove() {
        console.log('Image approved');
    }

    function handleImageReject() {
        console.log('Image rejected');
    }

    function handleCategoryChange(newCategory: string) {
        setCategory(newCategory);
    }

    return (
        <main className="home__main">
            <h1>Image</h1>
            <div>
                <img src={imageUrl} alt={imageCategory} />
            </div>
            <ul>
                <li>
                    <button onClick={handleImageApprove}>
                        이미지 등록 승인
                    </button>
                </li>
                <li>
                    <button onClick={handleImageReject}>
                        이미지 등록 반려
                    </button>
                </li>
                <li>
                    <button>이미지 삭제</button>
                </li>
                <li>
                    <Dropdown
                        currentCategory={category}
                        categories={categories}
                        onCategoryChange={handleCategoryChange}
                    />
                    <button>카테고리 변경하기</button>
                </li>
            </ul>
        </main>
    );
}
