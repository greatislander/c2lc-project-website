"use strict";

const extractId = require("../_utils/extract-youtube-id.js");

module.exports = (caption, url) => {
    const id = extractId(url);
    return `<figure class="[ grid-video ] [ flow ]">
<a href="${url}" class="linked-video" data-id="${id}">
    <svg viewBox="0 0 132 132" fill="none" class="play-button" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <circle cx="66" cy="66" r="66" class="bg" />
        <path d="M89.5 52.51c10 5.773 10 20.207 0 25.98L66.25 91.914c-10 5.773-22.5-1.444-22.5-12.99V52.076c0-11.547 12.5-18.764 22.5-12.99L89.5 52.51z" class="fg" />
    </svg>
    <div class="[ grid-video__image ]" role="image" aria-labelledby="caption-${id}" style="background-image: url(https://i3.ytimg.com/vi/${id}/maxresdefault.jpg);"></div>
</a>
<figcaption id="caption-${id}">${caption}</figcaption>
</figure>`;
};
