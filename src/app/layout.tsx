import "./../styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "MDF Consulting Ltd",
    description:
        "Malta-based software development and technical advisory for European business clients.",
    metadataBase: new URL("https://mdfornes.com"),
    openGraph: {
        title: "MDF Consulting Ltd",
        description:
            "Malta-based software development and technical advisory for European business clients.",
        url: "https://mdfornes.com",
        siteName: "mdfornes.com",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MDF Consulting Ltd",
        description:
            "Malta-based software development and technical advisory for European business clients.",
    },
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico", sizes: "any" },
        ],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                style={{
                    fontFamily: "'Space Grotesk', Inter, Arial, sans-serif",
                }}
            >
                <div className="wrapper">{children}</div>
            </body>
        </html>
    )
}
