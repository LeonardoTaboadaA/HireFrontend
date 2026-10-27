"use client"

import { useEffect, useState } from "react";

export function ScrollToTopButton() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <>
            {showBackToTop && (
                <button
                    className="back-to-top"
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <span className="material-symbols-outlined">arrow_upward</span>
                </button>
            )}
        </>

    )
}