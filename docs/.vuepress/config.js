module.exports = {
  title: "PSMS Documentation",
  description: "Detailed guides and documentation for PSMS.",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Data Input",
        link: "/input/",
      },
      {
        text: "Reporting",
        link: "/reporting/",
      },
      {
        text: "FAQ",
        link: "/faq/"
      },
      {
        text: "PSMS",
        link: "https://psms.ph",
      },
    ],

    sidebar: {
      '/input/': [
        '',
        'system',
        'project',
        'contract',
        'user'
      ],
      '/reporting/': [
        '',
        'contract',
        'project'
      ]
    },

    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
};
