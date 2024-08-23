import { useEffect, useState } from 'react';

const useVisibility = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const BUFFER = 30; // Buffer in pixels

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                // Change visibility based on the element being within BUFFER pixels of the viewport's top
                const isNearViewportTop = rect.top <= BUFFER && rect.bottom > 0;
                setIsVisible(isNearViewportTop);
            }
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return isVisible;
};

export default useVisibility;
