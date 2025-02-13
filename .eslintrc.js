"use strict";

module.exports = {
    extends: [
        "fluid",
        "plugin:yml/standard",
        "plugin:markdown/recommended-legacy"
    ],
    ignorePatterns: ["_site/", "backstop_data/", "!.*.cjs", "!.*.js", "!.github/"],
    env: {
        amd: true,
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2020
    },
    overrides: [
        {
            files: ["src/assets/scripts/app.js", "src/assets/scripts/**/*.module.js", "**/*.mjs"],
            parserOptions: {
                sourceType: "module"
            }
        },
        {
            files: ["**/*.md"],
            processor: "markdown/markdown"
        }
    ]
};
