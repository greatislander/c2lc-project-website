/*
Copyright the Trivet copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidic-11ty/raw/master/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/fluidic-11ty/raw/master/LICENSE.md.
*/

import "@zachleat/filter-container";

document.addEventListener("click", event => {
    if (event.target.id === "reset") {
        const filters = [...event.target.parentNode.querySelectorAll("select")];

        filters.forEach(filter => {
            filter.value = "";
            filter.dispatchEvent(new Event("change", {"bubbles": true}));
        });
    }

    // if (event.target.id === "menu-toggle") {
    //     const expanded = event.target.getAttribute("aria-expanded") === "true";
    //     event.target.setAttribute("aria-expanded", !expanded);
    // }
});
