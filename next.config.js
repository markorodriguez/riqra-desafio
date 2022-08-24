/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    BASEURL: "http://localhost:4000/api/graphql"
  }
}

module.exports = nextConfig
