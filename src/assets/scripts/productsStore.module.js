import { derived, readable, writable } from "svelte/store";

const products = writable([]);
const category = writable("All");
const filteredProducts = derived([products, category], ([$products, $category]) => {
    return $products.filter(product => {
        return $category === "All" || product.category === $category;
    });
});
const filtered = derived(category, $category => $category !== "All");
const perPage = readable(10);
const pageCount = derived([filteredProducts, perPage], ([$filteredProducts, $perPage]) => Math.ceil($filteredProducts.length / $perPage));
const pages = derived([pageCount, perPage], ([$pageCount, $perPage]) => {
    let pages = [];

    for (let i = 1; i <= $pageCount; i++) {
        pages.push((i - 1) * $perPage);
    }

    return pages;
});

export {
    products, filtered, filteredProducts, perPage, pageCount, pages, category
};
