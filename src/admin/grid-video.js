/* global CMS */

"use strict";

CMS.registerEditorComponent({
    id: "grid-video",
    label: "Grid Video",
    fields: [
        {
            name: "url",
            label: "YouTube Link",
            widget: "string"
        },
        {
            name: "caption",
            label: "Caption",
            widget: "markdown"
        }
    ],
    pattern: /^{% gridVideo "([\s\S]*?)" %}([\s\S]*?){% endgridVideo %}/,
    fromBlock: function (match) {
        return {
            url: match[1],
            caption: match[2]
        };
    },
    toBlock: function (obj) {
        const {url, caption} = obj;
        return `{% gridVideo "${url}" %}\n${caption}\n{% endgridVideo %}`;
    },
    toPreview: function (obj) {
        const {url, caption} = obj;
        const md = window.markdownit();
        caption = caption ? md.render(obj.caption) : "";
        return `<div class="grid__video flow">${url}<div class="grid__video__content">${caption}</div></div>`;
    }
});
