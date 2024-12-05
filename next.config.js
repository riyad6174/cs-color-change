/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  

  // output: { path: path.resolve(__dirname, 'static'), },
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.pdf/,
  //     type: 'asset/resource',
  //     generator: {
  //       filename: 'static/[hash][ext]',
  //     },
  //   })

  //   return config
  // },

  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
}

module.exports = nextConfig
