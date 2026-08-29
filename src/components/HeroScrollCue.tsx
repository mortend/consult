"use client"

import { useEffect, useState } from "react"

const fadeDistance = 140

export default function HeroScrollCue() {
    const [scrollOpacity, setScrollOpacity] = useState(1)

    useEffect(() => {
        const updateOpacity = () => {
            const nextOpacity = Math.max(0, 1 - window.scrollY / fadeDistance)
            setScrollOpacity(nextOpacity)
        }

        updateOpacity()
        window.addEventListener("scroll", updateOpacity, { passive: true })

        return () => {
            window.removeEventListener("scroll", updateOpacity)
        }
    }, [])

    return (
        <a
            aria-label="Scroll to services"
            className="hero-scroll-cue"
            href="#services"
            style={{ opacity: scrollOpacity }}
        >
            <svg aria-hidden="true" className="hero-scroll-icon" viewBox="0 0 48 48">
                <path d="M14 18L24 30L34 18" />
            </svg>
        </a>
    )
}
