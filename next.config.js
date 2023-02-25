const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfigDevServer = {
  reactStrictMode: true,
}

/** @type {import('next').NextConfig} */
const nextConfigElse = {
  assetPrefix: 'https://cdn.statically.io/gh/purwasadr/tohru-landing-page/gh-pages',
}

/** @type {import('next').NextConfig} */
const nextConfigCommon = {
  images: {
    unoptimized: true,
  },
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
