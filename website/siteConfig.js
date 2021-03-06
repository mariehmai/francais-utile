/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "User1",
    image: "/img/fr.png",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
]

const siteConfig = {
  title: "Français Utile" /* title for your website */,
  tagline: "Un site pour débuter en français",
  url: "https://francais-utile.netlify.com" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  projectName: "",
  headerLinks: [
    { doc: "expressions", label: "Expressions" },
    { doc: "food", label: "Vocabulaire" },
    { doc: "rules", label: "Règles" }
    // { page: "help", label: "Aide" }
    // { blog: true, label: "Tips" }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/favicon.png",
  footerIcon: "img/avatar-me.png",
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#509dbc",
    secondaryColor: "#314755"
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: new Date().getFullYear() + " - " + this.title,
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://gitlab.com/mhmaii/docs-french"
}

module.exports = siteConfig
