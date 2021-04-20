"use strict";

const MarkdownIt = require("markdown-it");

module.exports = (content, author) => {
    let citation;

    if (author === "") {
        citation = "";
    } else {
        citation = `<cite>${author}</cite>`;
    }

    let renderedContent;

    if (content.trim()) {
        const md = new MarkdownIt({
            html: true,
            breaks: true,
            linkify: true
        });

        renderedContent = md.render(content).trim();
    } else {
        renderedContent = "";
    }
    return `<blockquote>\n${renderedContent}\n${citation}\n</blockquote>`;
};
