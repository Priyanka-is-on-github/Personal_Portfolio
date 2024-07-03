"use client"

import { useEffect, useState } from "react"

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth); // Initialize with current width

    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        
        // Set initial size
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
}

export default useScreenSize;
