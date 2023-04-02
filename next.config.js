/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
        transpilePackages: ['react-syntax-highlighter/dist/esm/styles/prism']
    }
}

module.exports = nextConfig