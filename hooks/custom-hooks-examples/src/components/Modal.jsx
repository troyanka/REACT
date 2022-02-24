import { useRef, useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

export const Modal = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const clickedRef = useRef();
    useClickOutside(clickedRef, () => setModalOpen(false));
    
    return (
        <div>
            {isModalOpen ? (
                <div ref={clickedRef}>
                    👋 Hey, I'm a modal. Click anywhere outside of me to close.
                </div>
            ) : (
                <button onClick={() => setModalOpen(true)}>Open Modal</button>
            )}
        </div>
    );
};