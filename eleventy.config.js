/*
Copyright the Trivet copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/codelearncreate/weavly.org/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/codelearncreate/weavly.org/raw/main/LICENSE.md.
*/

"use strict";

const fluidPlugin = require("eleventy-plugin-fluid");
const navigationPlugin = require("@11ty/eleventy-navigation");
const blockquoteShortcode = require("./src/_shortcodes/blockquote.js");
const gridShortcode = require("./src/_shortcodes/grid.js");
const gridImageShortcode = require("./src/_shortcodes/grid-image.js");
const gridVideoShortcode = require("./src/_shortcodes/grid-video.js");
const imageShortcode = require("./src/_shortcodes/image.js");
const getYouTubeIdFilter = require("./src/_utils/extract-youtube-id.js");

// Import transforms
const parseTransform = require("./src/_transforms/parse-transform.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    // Transforms
    eleventyConfig.addTransform("parse", parseTransform);

    // Passthrough copy
    eleventyConfig.addPassthroughCopy("src/_redirects");
    eleventyConfig.addPassthroughCopy({"src/assets/icons": "/"});
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});
    eleventyConfig.addPassthroughCopy({"src/assets/media": "assets/media"});
    eleventyConfig.addPassthroughCopy("src/admin/config.yml");
    eleventyConfig.addPassthroughCopy("src/admin/*.js");
    eleventyConfig.addPassthroughCopy({
        "node_modules/decap-cms/dist/decap-cms.js": "lib/cms/decap-cms.js",
        "node_modules/decap-cms/dist/decap-cms.js.map": "lib/cms/decap-cms.js.map",
        "node_modules/@babel/standalone/babel.min.js": "lib/cms/babel.min.js",
        "node_modules/@babel/standalone/babel.min.js.map": "lib/cms/babel.min.js.map",
        "node_modules/markdown-it/dist/markdown-it.min.js": "lib/cms/markdown-it.min.js",
        "node_modules/prop-types/prop-types.min.js": "lib/cms/prop-types.min.js",
        "node_modules/react/umd/react.development.js": "lib/cms/react.development.js",
        "node_modules/react/umd/react.production.min.js": "lib/cms/react.production.min.js"
    });

    const now = new Date();

    // Custom collections
    const sortByLevel = (a, b) => {
        const levels = require("./src/_data/activityTags.json").experience;

        if (a.data.experience !== b.data.experience) {
            if (levels.indexOf(a.data.experience) < levels.indexOf(b.data.experience)) {
                return -1;
            }

            if (levels.indexOf(a.data.experience) > levels.indexOf(b.data.experience)) {
                return 1;
            }
        }

        if (a.title > b.title) {
            return 1;
        }

        if (a.title < b.title) {
            return -1;
        }
    };

    const liveResources = resource => resource.date <= now && !resource.data.draft;

    eleventyConfig.addCollection("resources", collection => {
        return [
            ...collection.getFilteredByGlob("./src/collections/resources/*.md").filter(liveResources).reverse()
        ];
    });

    eleventyConfig.addCollection("activities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/collections/activities/*.md")
                .sort(sortByLevel)
        ];
    });

    eleventyConfig.addCollection("robotActivities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/collections/robot-activities/*.md")
                .sort(sortByLevel)
        ];
    });

    eleventyConfig.addCollection("guides", collection => {
        return [
            ...collection.getFilteredByGlob("./src/collections/guides/*.md")
                .sort((a, b) => a.data.title.localeCompare(b.data.title))
        ];
    });

    eleventyConfig.addCollection("unpluggedActivities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/collections/activities/*.md")
                .filter(
                    function (activity) {
                        return activity.data.type === "Unplugged";
                    }
                )
                .sort(sortByLevel)
        ];
    });

    eleventyConfig.addCollection("onscreenActivities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/collections/activities/*.md")
                .filter(
                    function (activity) {
                        return activity.data.type === "On-Screen";
                    }
                )
                .sort(sortByLevel)
        ];
    });

    eleventyConfig.addCollection("hybridActivities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/collections/activities/*.md")
                .filter(
                    function (activity) {
                        return activity.data.type === "Hybrid";
                    }
                )
                .sort(sortByLevel)
        ];
    });

    eleventyConfig.addCollection("projects", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/collections/projects/*.md")
                .sort((a, b) => a.data.title.localeCompare(b.data.title))
        ];
    });

    // Plugins
    eleventyConfig.addPlugin(fluidPlugin, {
        css: {
            enabled: false
        },
        sass: {
            enabled: true
        },
        i18n: false
    });
    eleventyConfig.addPlugin(navigationPlugin);

    eleventyConfig.addShortcode("svgPlaceholder", function (width, height) {
        return `<svg viewBox="0 0 ${width} ${height}" style="--width: ${width}px;" class="placeholder">
        <rect width="${width}" height="${height}" />
    </svg>`;
    });

    eleventyConfig.addFilter("getYouTubeId", getYouTubeIdFilter);
    eleventyConfig.addShortcode("image", imageShortcode);
    eleventyConfig.addPairedShortcode("gridImage", gridImageShortcode);
    eleventyConfig.addPairedShortcode("gridVideo", gridVideoShortcode);
    eleventyConfig.addPairedShortcode("blockquote", blockquoteShortcode);
    eleventyConfig.addPairedShortcode("grid", gridShortcode);

    return {
        dir: {
            input: "src"
        },
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true
    };
};
