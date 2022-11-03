/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname:'images.unsplash.com',
        port:'',
        pathname:'/photo-**'
      },
      {
        protocol: 'https',
        hostname:'www.google.co.uk',
        port:'',
        pathname:'/images/**'
      }
    ]
  }
}

module.exports = nextConfig
