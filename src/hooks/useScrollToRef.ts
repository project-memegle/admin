import { useEffect, useRef } from 'react';

export const useScrollToRef = <T extends HTMLElement>(dependency: any) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [dependency]);

    return ref;
};
