const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfigDevServer = {

}

/** @type {import('next').NextConfig} */
const nextConfigElse = {
  assetPrefix: './',
}

/** @type {import('next').NextConfig} */
const nextConfigCommon = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfigDevServer,
      ...nextConfigCommon
    }
  }

  return {
    ...nextConfigElse,
    ...nextConfigCommon
  }
}
