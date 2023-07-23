export default function sitemap() {
  const generatePagesFromArray = (Arr) => {
    const pages = Arr.map((item) => {
      return {
        url: `https://${process.env.SITE_URL}/${item}`,
        lastModified: new Date().toISOString(),
      };
    });
    return pages;
  };
  const pages = generatePagesFromArray([
    "",
    "about",
    "contact",
    "projects",
    "services/project-management",
    "services/maintenance-management",
    "services/energy-management",
    "services/design-services",
  ]);
  return pages;
}
