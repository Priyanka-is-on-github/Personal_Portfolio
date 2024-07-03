"use client"

import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(0); // Initialize with a default value

    useEffect(() => {
        // Check if window is available
        if (typeof window !== "undefined") {
            const handleResize = () => setScreenSize(window.innerWidth);

            window.addEventListener("resize", handleResize);
            
            // Set initial size
            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return screenSize;
};

export default useScreenSize;
