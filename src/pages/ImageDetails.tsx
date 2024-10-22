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
        <main className="home__main c-image__detail">
            <div className="c-title__detail">
                <button className="c-title__detail-button">
                    <i className="c-icon">arrow_back_ios</i>
                </button>
                <h2>이미지 상세보기</h2>
            </div>
            <div>
                <img src={imageUrl} alt={imageCategory} />
            </div>
            <form className="c-image__detail-section">
                <div className="c-image__detail-section-item">
                    <label htmlFor="">밈 아이디</label>
                    <input
                        type="text"
                        value="1
                    "
                    />
                </div>{' '}
                <div className="c-image__detail-section-item">
                    <label htmlFor="">최종 수정일</label>
                    <input type="text" value="2023.04.10" />
                </div>{' '}
                <div className="c-image__detail-section-item">
                    <label htmlFor="">게시일</label>
                    <input type="text" value="2023.04.01" />
                </div>{' '}
                <div className="c-image__detail-section-item">
                    <label htmlFor="">검증 여부</label>
                    {/* <input type="text" value="미승인" /> */}
                    <select name="category" id="category">
                        <option value="미승인">미승인</option>
                        <option value="승인">승인</option>
                        <option value="반려">반려</option>
                    </select>
                </div>{' '}
                <div className="c-image__detail-section-item">
                    <label htmlFor="">카테고리</label>
                    <select name="category" id="category">
                        {categories.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="c-image__detail-section-button">
                    <button>변경사항 저장</button>
                </div>
            </form>
        </main>
    );
}
