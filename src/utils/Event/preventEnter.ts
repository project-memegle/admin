import { KeyboardEvent } from 'react';

const handleKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
};

export default handleKeyDown;
