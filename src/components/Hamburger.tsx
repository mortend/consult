"use client"

import { useState } from "react"

const menuItems = [
    { href: "#top", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#examples", label: "Work" },
    { href: "#contact", label: "Contact" },
    { href: "https://mortend.co", label: "Profile", external: true },
]

export default function Hamburger() {
    const [open, setOpen] = useState(false)

    return (
        <div className="floating-menu">
            <button
                aria-controls="site-menu"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="menu-button"
                type="button"
                onClick={() => setOpen((current) => !current)}
            >
                <span />
                <span />
                <span />
            </button>
            <div className={`menu-panel${open ? " is-open" : ""}`} id="site-menu">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        className="menu-link"
                        href={item.href}
                        onClick={() => setOpen(false)}
                        rel={item.external ? "noreferrer" : undefined}
                        target={item.external ? "_blank" : undefined}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    )
}
