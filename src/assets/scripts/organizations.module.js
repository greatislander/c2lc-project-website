import Organizations from "./Organizations.svelte";

const organizations = new Organizations({
    target: document.getElementById("organizations"),
    props: {}
});

window.organizations = organizations;

export default organizations;
