export function GET() {
    return new Response(["https://mdfornes.com/"].join("\n"), {
        headers: { "Content-Type": "text/plain" },
    })
}
