/*
Copyright the Trivet copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/codelearncreate/weavly.org/raw/master/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/codelearncreate/weavly.org/raw/master/LICENSE.md.
*/

import "@zachleat/filter-container";
import "wicg-inert";

import VideoOverlay from "./overlay.module.js";

// document.addEventListener("click", event => {
//     if (event.target.id === "reset") {
//         const filters = [...event.target.parentNode.querySelectorAll("select")];

//         filters.forEach(filter => {
//             filter.addEventListener("change", function () {
//                 console.log("changed");
//             });

//             filter.value = "";
//             filter.dispatchEvent(new Event("change", {"bubbles": true}));
//         });


//     }
// });

const linkedVideos = [...document.querySelectorAll(".linked-video")];

if (linkedVideos.length > 0) {
    linkedVideos.forEach.call(linkedVideos, link => {
        let overlay = new VideoOverlay(link);
        overlay.init();
    });
}
