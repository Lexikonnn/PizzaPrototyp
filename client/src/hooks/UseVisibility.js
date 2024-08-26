import { useEffect, useState } from 'react';

const useVisibility = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const BUFFER = 30;

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const isNearViewportTop = rect.top <= BUFFER && rect.bottom > 0;
                setIsVisible(isNearViewportTop);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return isVisible;
};

export default useVisibility;
