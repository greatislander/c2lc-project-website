/* global CMS */

"use strict";

CMS.registerEditorComponent({
    id: "blockquote",
    label: "Blockquote",
    fields: [
        {
            name: "quote",
            label: "Quote",
            widget: "markdown"
        },
        {
            name: "author",
            label: "Author",
            widget: "string"
        }
    ],
    pattern: /^{% blockquote "([\s\S]*?)" %}([\s\S]*?){% endblockquote %}/,
    fromBlock: function (match) {
        return {
            author: match[1],
            quote: match[2]
        };
    },
    toBlock: function (obj) {
        return `{% blockquote "${obj.author}" %}\n${obj.quote}\n{% endblockquote %}`;
    },
    toPreview: function (obj) {
        var md = window.markdownit();
        var quote = obj.quote ? md.render(obj.quote) : "";
        var citation = obj.author ? `<cite>${obj.author}</cite>` : "";
        return `<blockquote>${quote}${citation}</blockquote>`;
    }
});
