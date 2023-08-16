# C2LC Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/b69af899-f119-4aa8-a7e2-e5d99e995b8c/deploy-status)](https://app.netlify.com/sites/weavly/deploys)

This repository contains the files needed to build the [Eleventy](http://11ty.dev/)-based static site for the [C2LC Project](https://c2lc-project.netlify.app).

## Usage

### To run locally in development mode

1. Install the required NPM packages: `npm install`
2. Run [Eleventy](http://11ty.dev) in development mode: `npm start`.

The website will be available at [http://localhost:8080](http://localhost:8080).

## Notes

Modifications can be made to any source file or directory except for the contents of the `./_site/` directory. The
`./_site/` directory is not versioned since it contains the built website that Eleventy generates from the source files,
and  files in `_site` are overwritten at build time.

## License

The website code is available under the [New BSD License](https://raw.githubusercontent.com/codelearncreate/c2lc-project-website/main/LICENSE.md).

## Third Party Software in this project

This project is based on other publicly available software, categorized by license:

### BSD 3-Clause License

* [Cooperative Tool Library](https://github.com/platform-coop-toolkit/coop-tool-library)

### MIT License

* [Eleventastic](https://github.com/maxboeck/eleventastic)
* [eleventy-webpack](https://github.com/clenemt/eleventy-webpack)
* [Hylia](https://github.com/hankchizljaw/hylia)
* [Supermaya](https://github.com/MadeByMike/supermaya)
* [Teenyicons](https://github.com/teenyicons/teenyicons)
