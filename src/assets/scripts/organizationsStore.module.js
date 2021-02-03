import { derived, readable, writable } from "svelte/store";

const organizations = writable([]);
const category = writable("All");
const filteredOrganizations = derived([organizations, category], ([$organizations, $category]) => {
    return $organizations.filter(organization => {
        return $category === "All" || organization.category === $category;
    });
});
const filtered = derived(category, $category => $category !== "All");
const perPage = readable(10);
const pageCount = derived([filteredOrganizations, perPage], ([$filteredOrganizations, $perPage]) => Math.ceil($filteredOrganizations.length / $perPage));
const pages = derived([pageCount, perPage], ([$pageCount, $perPage]) => {
    let pages = [];

    for (let i = 1; i <= $pageCount; i++) {
        pages.push((i - 1) * $perPage);
    }

    return pages;
});

export {
    organizations, filtered, filteredOrganizations, perPage, pageCount, pages, category
};
