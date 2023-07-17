/*
Copyright the Trivet copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/codelearncreate/weavly.org/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/codelearncreate/weavly.org/raw/main/LICENSE.md.
*/

"use strict";

const fs = require("fs");

const fluidPlugin = require("eleventy-plugin-fluid");
const navigationPlugin = require("@11ty/eleventy-navigation");
const blockquoteShortcode = require("./src/shortcodes/blockquote.js");
const gridShortcode = require("./src/shortcodes/grid.js");
const gridImageShortcode = require("./src/shortcodes/grid-image.js");
const gridVideoShortcode = require("./src/shortcodes/grid-video.js");
const imageShortcode = require("./src/shortcodes/image.js");
const getYouTubeIdFilter = require("./src/utils/extract-youtube-id.js");

// Import transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
const parseTransform = require("./src/transforms/parse-transform.js");

module.exports = function (config) {
    config.setUseGitIgnore(false);

    // Transforms
    config.addTransform("htmlmin", htmlMinTransform);
    config.addTransform("parse", parseTransform);

    // Passthrough copy
    config.addPassthroughCopy({"src/assets/icons": "/"});
    config.addPassthroughCopy({"src/assets/images": "assets/images"});
    config.addPassthroughCopy({"src/assets/media": "assets/media"});
    config.addPassthroughCopy("src/admin/config.yml");
    config.addPassthroughCopy("src/admin/*.js");

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

    config.addCollection("resources", collection => {
        return [
            ...collection.getFilteredByGlob("./src/resources/*.md").filter(liveResources).reverse()
        ];
    });

    config.addCollection("activities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/activities/*.md")
                .sort(sortByLevel)
        ];
    });

    config.addCollection("robotActivities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/robot-activities/*.md")
                .sort(sortByLevel)
        ];
    });

    config.addCollection("guides", collection => {
        return [
            ...collection.getFilteredByGlob("./src/guides/*.md")
                .sort((a, b) => a.data.title.localeCompare(b.data.title))
        ];
    });

    config.addCollection("unpluggedActivities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/activities/*.md")
                .filter(
                    function (activity) {
                        return activity.data.type === "Unplugged";
                    }
                )
                .sort(sortByLevel)
        ];
    });

    config.addCollection("onscreenActivities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/activities/*.md")
                .filter(
                    function (activity) {
                        return activity.data.type === "On-Screen";
                    }
                )
                .sort(sortByLevel)
        ];
    });

    config.addCollection("hybridActivities", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/activities/*.md")
                .filter(
                    function (activity) {
                        return activity.data.type === "Hybrid";
                    }
                )
                .sort(sortByLevel)
        ];
    });

    config.addCollection("projects", collection => {
        return [
            ...collection
                .getFilteredByGlob("./src/projects/*.md")
                .sort((a, b) => a.data.title.localeCompare(b.data.title))
        ];
    });

    // Plugins
    config.addPlugin(fluidPlugin);
    config.addPlugin(navigationPlugin);

    config.addShortcode("svgPlaceholder", function (width, height) {
        return `<svg viewBox="0 0 ${width} ${height}" style="--width: ${width}px;" class="placeholder">
        <rect width="${width}" height="${height}" />
    </svg>`;
    });

    config.addFilter("getYouTubeId", getYouTubeIdFilter);
    config.addShortcode("image", imageShortcode);
    config.addPairedShortcode("gridImage", gridImageShortcode);
    config.addPairedShortcode("gridVideo", gridVideoShortcode);
    config.addPairedShortcode("blockquote", blockquoteShortcode);
    config.addPairedShortcode("grid", gridShortcode);

    // 404
    config.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {

                bs.addMiddleware("*", (req, res) => {
                    const content_404 = fs.readFileSync("dist/404.html");
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.writeHead(404);
                    res.end();
                });
            }
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes"
        },
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true
    };
};
