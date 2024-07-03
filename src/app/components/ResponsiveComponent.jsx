"use client"

import React from 'react'
import useScreenSize from '../components/hooks/useScreenSize'

function ResponsiveComponent({ children }) {
    const size = useScreenSize();

    return (
        <div>
            {typeof children === 'function' ? children({ size }) : children} 
        </div>
    );
}

export default ResponsiveComponent;
