"use strict";

module.exports = (caption, src, alt, url) => {
    let image = `<div class="grid-image__image" role="image" aria-label="${alt}" style="background-image: url(${src}?nf_resize=fit&w=320&h=310);"></div>`;
    if (url !== "") {
        image = `<a rel="external" href="${url}">${image}</a>`;
    }
    return `<figure class="[ grid-image ] [ flow ]">
    ${image}
    <figcaption>${caption}</figcaption>
</figure>`;
};
