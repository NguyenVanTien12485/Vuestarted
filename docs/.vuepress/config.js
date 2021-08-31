module.exports = {
  head: [['link', { rel: 'icon', href: '/images/apple-touch-icon.png' }]],
  lang: "en-US",
  title: "Hello, OKXE.VN!",
  description: "I want to learn VuePress",
  themeConfig: {
    logo: "/images/apple-touch-icon.png",
    navbar: [
      { text: "Home",
       link: "/" },

      { text: "Recruitment", 
      link: "/guide",
      children: [
        {text:"Backend Dev", link: "/guide/Backend.md"},
        {text: "Frontend Dev", link: "/guide/Frontend.md"}
      ] },

      {text: "Changelog",
       link: "/changelog",
      children: [
        {text:" OKXE Web app", link: "/changelog/OKXE Web App.md"}
      ]},

      {text:"Languege",
      children:[{text:"Eng",link:"/language/Eng.md"},{text:"Vi",link:"/language/Vi.md"},
      ],},

      { text: "About us", link: "http://okxe.vn" },

    ],
    sidebar: 'auto'
  },
};
