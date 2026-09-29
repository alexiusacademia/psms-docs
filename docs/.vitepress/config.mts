import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-PH",
  title: "PSMS Docs",
  description: "User guide for PSMS, the project and contract monitoring system for government offices.",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["meta", { name: "theme-color", content: "#0f172a" }],
    ["link", { rel: "icon", href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%230284c7'/><text x='16' y='22' font-family='Arial' font-weight='700' font-size='17' fill='white' text-anchor='middle'>P</text></svg>" }],
  ],
  themeConfig: {
    siteTitle: "PSMS Docs",
    nav: [
      { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
      { text: "How it's calculated", link: "/calculations" },
      { text: "FAQ", link: "/faq" },
      { text: "What's new", link: "/whats-new" },
      { text: "Open PSMS ↗", link: "https://app.psms.ph" },
    ],
    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "Introduction", link: "/guide/" },
          { text: "Signing in and finding your way", link: "/guide/basics" },
          { text: "Roles and permissions", link: "/guide/roles" },
        ],
      },
      {
        text: "Everyday work",
        items: [
          { text: "Dashboard", link: "/guide/dashboard" },
          { text: "Contracts", link: "/guide/contracts" },
          { text: "Map", link: "/guide/map" },
          { text: "Projects and finance", link: "/guide/projects" },
          { text: "Reports", link: "/guide/reports" },
          { text: "Custom reports", link: "/guide/custom-reports" },
        ],
      },
      {
        text: "Administration",
        items: [
          { text: "Setup lists", link: "/guide/setup" },
          { text: "Users and team activity", link: "/guide/team" },
          { text: "Office settings and subscription", link: "/guide/office" },
          { text: "Forum", link: "/guide/forum" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "How the numbers are calculated", link: "/calculations" },
          { text: "FAQ", link: "/faq" },
          { text: "What's new in PSMS", link: "/whats-new" },
        ],
      },
    ],
    search: { provider: "local" },
    outline: { level: [2, 3], label: "On this page" },
    lastUpdated: { text: "Updated" },
    docFooter: { prev: "Previous", next: "Next" },
    footer: {
      message: "PSMS · Project Status Monitoring System",
      copyright: "© 2020–2026 PSMS",
    },
  },
});
