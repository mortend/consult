/* eslint-disable @next/next/no-img-element */
import Hamburger from "../components/Hamburger"
import HeroScrollCue from "../components/HeroScrollCue"

const services = [
    "Software development",
    "Architecture and technical advisory",
    "Long-term product support",
]

const exampleEngagements = [
    {
        title: "Workflow systems",
        description:
            "Internal tools, approvals, dashboards, and operational software shaped around real business processes.",
        accent: "Ops",
        image: "/examples/workflow-systems.png",
    },
    {
        title: "Customer platforms",
        description:
            "Portals, content systems, and product surfaces where business logic and user experience need to work together.",
        accent: "Platform",
        image: "/examples/customer-platforms.png",
    },
    {
        title: "Technical foundations",
        description:
            "Architecture, integrations, backend systems, and the ongoing evolution of software already in production.",
        accent: "Core",
        image: "/examples/technical-foundations.png",
    },
]

function GitHubIcon() {
    return <img src="/github.svg" alt="" aria-hidden="true" className="github-icon" />
}

function NpmIcon() {
    return <img src="/npm.svg" alt="" aria-hidden="true" className="github-icon" />
}

export default function Page() {
    return (
        <>
            <Hamburger />
            <main className="site-main" id="top">
                <section className="hero-section">
                    <div className="hero-mark">
                        <img src="/logo.png" alt="MDF Consulting Ltd" width={420} />
                    </div>
                    <div className="hero-meta">
                        <span>Malta</span>
                        <span>B2B</span>
                        <span>Remote</span>
                    </div>
                    <div className="hero-copy">
                        <p className="hero-lead">
                            Malta-based B2B consulting in product engineering, architecture, and
                            technical delivery.
                        </p>
                        <div className="hero-actions">
                            <a className="button-primary" href="#contact">
                                Contact
                            </a>
                            <a className="button-secondary" href="#services">
                                Services
                            </a>
                        </div>
                        <div className="github-button-row hero-github-row">
                            <a
                                className="github-button github-button-icon-only"
                                href="https://github.com/mortend"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                className="github-button github-button-icon-only"
                                href="https://npmjs.com/~mortend"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="npm"
                            >
                                <NpmIcon />
                            </a>
                        </div>
                    </div>
                    <HeroScrollCue />
                </section>

                <section className="content-section" id="services">
                    <div className="section-copy">
                        <p>&nbsp;</p>
                        <p className="eyebrow">Services</p>
                        <h2>Practical technical help, without the extra noise.</h2>
                    </div>
                </section>

                <section className="trust-strip" aria-label="Business profile">
                    <div className="trust-card">
                        <span className="trust-label">Build</span>
                        <strong>Systems and platforms</strong>
                        <svg aria-hidden="true" className="trust-icon" viewBox="0 0 64 64">
                            <rect x="14" y="14" width="16" height="16" rx="4" />
                            <rect x="34" y="14" width="16" height="16" rx="4" />
                            <rect x="14" y="34" width="16" height="16" rx="4" />
                            <rect x="34" y="34" width="16" height="16" rx="4" />
                            <path d="M32 22H34" />
                            <path d="M22 32V34" />
                        </svg>
                    </div>
                    <div className="trust-card">
                        <span className="trust-label">Advise</span>
                        <strong>Architecture and delivery</strong>
                        <svg aria-hidden="true" className="trust-icon" viewBox="0 0 64 64">
                            <path d="M16 48L28 36L36 42L48 22" />
                            <path d="M41 22H48V29" />
                            <circle cx="16" cy="48" r="3.5" />
                            <circle cx="28" cy="36" r="3.5" />
                            <circle cx="36" cy="42" r="3.5" />
                            <circle cx="48" cy="22" r="3.5" />
                        </svg>
                    </div>
                    <div className="trust-card">
                        <span className="trust-label">Operate</span>
                        <strong>Long-term support</strong>
                        <svg aria-hidden="true" className="trust-icon" viewBox="0 0 64 64">
                            <path d="M32 14L45 19V31C45 39.5 39.5 47 32 50C24.5 47 19 39.5 19 31V19L32 14Z" />
                            <path d="M26 31L30 35L38 27" />
                        </svg>
                    </div>
                </section>

                <section className="content-section" id="examples">
                    <div className="section-copy">
                        <p className="eyebrow">Example work</p>
                        <h2>Representative delivery across product and platform work.</h2>
                    </div>
                    <div className="example-grid">
                        {exampleEngagements.map((item) => (
                            <article className="example-card" key={item.title}>
                                <div className="example-visual" aria-hidden="true">
                                    <img
                                        className="example-image"
                                        src={item.image}
                                        alt=""
                                        width={1200}
                                        height={900}
                                    />
                                    <div className="example-chip">{item.accent}</div>
                                </div>
                                <div className="example-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="github-button-row project-links-row">
                        <a
                            className="github-button"
                            href="https://github.com/mortend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                            Browse the code
                        </a>
                        <a
                            className="github-button"
                            href="https://npmjs.com/~mortend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <NpmIcon />
                            View packages
                        </a>
                    </div>
                </section>

                <section className="closing-section" id="contact">
                    <p className="eyebrow">Contact</p>
                    <h2>Feel free to get in touch.</h2>
                    <div className="contact-links">
                        <a className="button-primary" href="mailto:consult@mdfornes.com">
                            consult@mdfornes.com
                        </a>
                    </div>
                    <div className="company-grid">
                        <div className="company-card">
                            <strong>MDF Consulting Ltd</strong>
                            <span>Operating since: 2025</span>
                            <span>Company: C114101</span>
                            <span>VAT: MT32595035</span>
                        </div>
                        <div className="company-card">
                            <strong>Registered address</strong>
                            <span>SOHO St. Julian&apos;s, Unit P153</span>
                            <span>Triq Elija Zammit, San Giljan</span>
                            <span>STJ 3154, Malta</span>
                        </div>
                    </div>
                </section>

                <div className="fork-link-wrap">
                    <a
                        className="fork-link"
                        href="https://github.com/mortend/consult"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon />
                        Fork
                    </a>
                </div>

                <div className="footer-scroll">
                    <a
                        aria-label="Scroll back to top"
                        className="hero-scroll-cue footer-scroll-cue"
                        href="#top"
                    >
                        <svg
                            aria-hidden="true"
                            className="hero-scroll-icon footer-scroll-icon"
                            viewBox="0 0 48 48"
                        >
                            <path d="M14 30L24 18L34 30" />
                        </svg>
                    </a>
                </div>
            </main>
            <footer className="footer">
                <div className="footer-line">
                    © {new Date().getFullYear()} <strong>MDF Consulting Ltd.</strong> Malta-based
                    software development and technical advisory.
                </div>
                <div className="footer-line">
                    Made by{" "}
                    <a href="https://mortend.co" target="_blank" rel="noreferrer">
                        <strong>mortend.co</strong>
                    </a>
                </div>
            </footer>
        </>
    )
}
