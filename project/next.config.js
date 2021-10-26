/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/:slug',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
}