
"use client"

import { useEffect, useState } from "react"

export function DetectedMoveMouse(){

    const [cursorPosition, setCursorPosition] = useState({
        x: -100,
        y: -100,
    })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({
                x: e.clientX,
                y: e.clientY,
            })
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);

    }, []);

    return(
        <>
            <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 12,
                height: 12,
                background: "cornflowerblue",
                pointerEvents: "none",
                transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px,0)`,
            }}
            >

            </div> 
        </>
    )
}