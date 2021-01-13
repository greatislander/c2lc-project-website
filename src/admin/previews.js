/* global CMS, createClass, h */

"use strict";

const PagePreview = createClass({
    render: function () {
        const entry = this.props.entry;
        return h("article", {},
            h("header", {"className": "header"},
                h("div", {"className": "wrapper"},
                    h("h1", {}, entry.getIn(["data", "title"]) || "Untitled")
                )
            ),
            h("div", {"className": "content"},
                h("div", {"className": "inner-content"},
                    this.props.widgetFor("body")
                )
            )
        );
    }
});

CMS.registerPreviewTemplate("pages", PagePreview);
