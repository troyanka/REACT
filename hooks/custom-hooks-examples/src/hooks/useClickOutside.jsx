import { useState, useEffect } from "react";

/**
* Receives reference to the clickable element, and the callbackFunction
**/

export const useClickOutside = (clickedRef, clickOutsideCallback) => {
    useEffect(() => {
        const listener = e => {
            if (!clickedRef.current || clickedRef.current.contains(e.target)) {
                return false;
            }

            clickOutsideCallback();
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    }, [clickedRef, clickOutsideCallback])
};