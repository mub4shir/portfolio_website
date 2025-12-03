/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mubashlr.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const isHome = path === "/";
    return {
      loc: path,
      changefreq: isHome ? "daily" : "weekly",
      priority: isHome ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternates: {},
    };
  },
};
