import { useState } from 'react';

type DropdownProps = {
    currentCategory: string;
    categories: string[];
    onCategoryChange: (category: string) => void;
};

export default function Dropdown({
    currentCategory,
    categories,
    onCategoryChange,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (category: string) => {
        onCategoryChange(category);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                {currentCategory}
            </button>
            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                {categories.map((item, index) => (
                    <li key={index}>
                        <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleCategoryClick(item)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
