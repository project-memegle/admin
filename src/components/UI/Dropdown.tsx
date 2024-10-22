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
        onCategoryChange(category);
        setIsOpen(false);
    };

    return (
        <form className="dropdown">
            <label htmlFor="category">dropdown</label>
            <select name="category" id="category">
                {categories.map((item, index) => (
                    <option
                        key={index}
                        value={item}
                        onClick={() => handleCategoryClick(item)}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </form>
    );
}
