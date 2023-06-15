/**
* @link https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
**/
module.exports = {
  i18n: {
    locales: ["al", "en", "mk"],
    defaultLocale: "al",
  },
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  images: {
    unoptimized: true
  }
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
};
