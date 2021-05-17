"use strict";

module.exports = (caption, src, alt, url) => {
    let image = `<div class="grid__image__wrapper" role="image" aria-label="${alt}" style="background-image: url(${src}?nf_resize=fit&w=320&h=310);"></div>`;
    if (url !== "") {
        image = `<a rel="external" href="${url}">${image}</a>`;
    }
    return `<div class="grid__image flow">${image}<div class="grid__image__content">${caption}</div>
</div>`;
};
