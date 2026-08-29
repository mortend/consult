export function GET() {
    return new Response(`User-agent: *\nAllow: /\nSitemap: https://mdfornes.com/sitemap.txt`, {
        headers: { "Content-Type": "text/plain" },
    })
}
