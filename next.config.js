/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["links.papareact.com", "google.com", "fakestoreapi.com"],
        formats: ["image/webp"]
    }
}

module.exports = nextConfig
