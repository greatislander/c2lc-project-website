import Products from "./Products.svelte";

const products = new Products({
    target: document.getElementById("products"),
    props: {}
});

window.products = products;

export default products;
