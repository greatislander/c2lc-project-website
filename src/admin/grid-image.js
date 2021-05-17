/* global CMS */

"use strict";

CMS.registerEditorComponent({
    id: "grid-image",
    label: "Grid Image",
    fields: [
        {
            name: "src",
            label: "Image",
            widget: "image"
        },
        {
            name: "alt",
            label: "Alt Text",
            widget: "string"
        },
        {
            name: "url",
            label: "Link",
            widget: "string"
        },
        {
            name: "caption",
            label: "Caption",
            widget: "markdown"
        }
    ],
    pattern: /^{% gridImage "([\s\S]*?)", "([\s\S]*?)", "([\s\S]*?)" %}([\s\S]*?){% endgridImage %}/,
    fromBlock: function (match) {
        return {
            src: match[1],
            alt: match[2],
            url: match[3],
            caption: match[4]
        };
    },
    toBlock: function (obj) {
        const {src, alt, url, caption} = obj;
        return `{% gridImage "${src}", "${alt}", "${url}" %}\n${caption}\n{% endgridImage %}`;
    },
    toPreview: function (obj, getAsset, fields) {
        const {src, alt, url, caption} = obj;
        const imageField = fields.find(f => f.get("widget") === "image");
        src = getAsset(src, imageField);
        const md = window.markdownit();
        caption = caption ? md.render(caption) : "";
        let image = `<div class="grid__image__wrapper" role="image" aria-label="${alt}" style="background-image: url(${src}?nf_resize=fit&w=320&h=310);"></div>`;
        if (url !== "") {
            image = `<a rel="external" href="${url}">${image}</a>`;
        }
        return `<div class="grid__image flow">${image}<div class="grid__image__content">${caption}</div></div>`;
    }
});
