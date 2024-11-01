import { useLocation, useParams } from 'react-router-dom';
import { FakeData, fakeDataItem } from './Image';
import { useState, useEffect } from 'react';
import useNavigateToBack from '../hooks/useNavigateToBack';
import { useScrollToRef } from '../hooks/useScrollToRef';

const fakeDataArray = FakeData.results;

export default function ImageDetails() {
    const location = useLocation();

    const { imageUrl, imageCategory } = location.state as fakeDataItem;
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const imageCategories = fakeDataArray.map((item) => item.imageCategory);
        setCategories(imageCategories);
    }, []);

    const onChangeButton = useNavigateToBack();

    return (
        <main className="home__main c-image__detail">
            <div className="c-title">
                <section className="c-title__detail">
                    <button
                        className="c-title__detail-button"
                        type="button"
                        onClick={onChangeButton}
                    >
                        <i className="c-icon">arrow_back_ios</i>
                    </button>
                    <h2>이미지 상세보기</h2>
                </section>
                <button className="button__light">변경사항 저장</button>
            </div>
            <form className="c-image__detail-section">
                <div>
                    <img src={imageUrl} alt={imageCategory} />
                </div>
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
            </form>
        </main>
    );
}
