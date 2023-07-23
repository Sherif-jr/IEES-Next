export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `https://${process.env.SITE_URL}/sitemap.xml`,
  };
}
