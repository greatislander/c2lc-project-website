"use strict";

module.exports = (content, columns) => {
    columns = columns || 2;
    return `<div class="grid grid--${columns}">\n${content}\n</div>`;
};
