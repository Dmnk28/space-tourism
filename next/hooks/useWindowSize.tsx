import { useEffect, useState } from "react";

export interface WindowSize {
    width:  number;
    // height: number;                  // Currently not needed
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width:  375,
        // height: 0,
    });

    useEffect(() => {
        const handleResize = ():void => {
            setWindowSize({
                width: window.innerWidth,
                // height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize); 
    }, []);
    return windowSize;
}

export default useWindowSize;