This repository houses the website of the 5280 Synchro organization.

# About the website

The website uses the [Eleventy](https://www.11ty.dev/) website generator.  If you aren't familiar, it's a way to build simple static websites.  Static websites are just plain html, css, images and javascript files.

# Editing Content

The main page content is specified in `index.md`, which is a plain text format called Markdown.  If you are part of the 5280 Synchro organization and need to make a change, you can use the github online editor to make changes to this file and commit them.

A few minutes later, you'll see the changes live on the website.

# Brand Assets

The 5280 logo and various assets live in the `assets/` directory:

* `5280_synchro_logo.svg`: The main art file, which contains the print logo, website logo and website favicon.
* `5280_synchro_print.svg`: The logo with "synchro" below 5280, suitable for printing on t-shirts or jackets.
* `5280_synchro_web.svg`: The banner logo for the website.

All assets were created with [Inkscape](https://inkscape.org/).  Version 1.4 or later should be suitable to make any changes.

The font for all assets is [Wix Madefor Text](https://fonts.google.com/specimen/Wix+Madefor+Text) which is freely available from [fonts.google.com](https://fonts.google.com).

# Technical details

The website is published to Github Pages via the `.github/workflows/build`.  That takes the output from the Eleventy build and pushes it to the `gh-pages` branch.

Whenever a commit is pushed to the `main` branch of this repository, the above action will run, building the website and deploying the new version to github pages.

## Local Development

Before starting local development you'll need to install and be familiar with [Node.js](https://nodejs.org/).

To test changes to the html templates in `_includes/layouts`, new Markdown files or anything else, you can start a local development server with the commands:

```bash
$ npm ci
$ npm run dev
```

And a development server will be started on `localhost:8080`.

If you need to change web hosts, you can run the build command:

```bash
$ npm run build
```

And then you can zip the "_site" directory and upload it to the web host of your choice.

This is, in fact, what the github action does.  It invokes the Eleventy build command and deploys the `_site` directory.

