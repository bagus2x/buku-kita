import { useEffect, useState } from "react";

export const useMedia = (callBack) => {
    return useEffect(() => {
        window.addEventListener('resize', () => {
            callBack(document.documentElement.clientWidth)
        });
        return window.removeEventListener('resize', () => {
            callBack(document.documentElement.clientWidth)
        });
    }, [callBack]);
}

export const useMatchMedia = () => {
    let initialWidth = document.documentElement.clientWidth;
    const [width, setWidth] = useState(initialWidth);
    useMedia((size) => setWidth(size));
    return width;
}