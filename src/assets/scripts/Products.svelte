<script>
    import { onMount } from 'svelte';

    import { products, filteredProducts, filtered, perPage, pageCount, pages, category } from './productsStore.module.js'

    import RadioGroup from './components/RadioGroup.svelte';

    let categories = [
        "Assistive Devices",
        "Robots",
        "Accessories",
        "STEAM Games"
    ];
     
    let offset = 0;
    let page = 1;
    
    function changePage(product) {
        const button = product.target.closest('button');
        page = parseInt(button.dataset.page);
        offset = (page - 1) * $perPage;
    }

    onMount(async () => {
		const res = await fetch(`/products.json`);
        $products = await res.json();
        offset = (page - 1) * $perPage;
        console.log($products);
	});
</script>

<div class="[ flow-lg ]">
    <div class="[ filter ] [ flow ]">
        <h2>Filter Projects</h2>
        <div class="[ filters ]">
            <RadioGroup options={categories} bind:activeOption={$category} />
        </div>
        <div class="[ alert ] [ { $filteredProducts.length > 0 ? 'alert--info' : 'alert--error' } ]" role="alert">
        {#if $filtered && $filteredProducts.length === 0}
        <p>No products matched these filters.</p>
        {:else if $filteredProducts.length < $products.length}
        <p>Showing <strong>{$filteredProducts.length}</strong> of <strong>{$products.length}</strong> activities{#if $pageCount > 1}, page <strong>1</strong> of <strong>{$pageCount}</strong>{/if}.</p>
        {/if}
        </div>
    </div>
    <div class="[ flow-md ]" aria-label="products">
        {#if $filteredProducts.length > 0}
            {#each $filteredProducts.slice(offset, offset + $perPage) as item}
                <article class="[ product ] [ two:three ]">
                    <div class="[ three:two__three ]">
                        <svg viewBox="0 0 570 380" class="placeholder"><rect width="570" height="380"></rect></svg>
                    </div>
                    <div class="[ three:two__two ] [ flow ]">
                        <h3>{ item.title }</h3>
                        <p class="[ metadata ]">By <span class="[ manufacturer ]">{ item.manufacturer }</span> &middot; <span class="[ category ]">{ item.category }</span></p>
                        {#if item.description }
                        <p>{ item.description }</p>
                        {/if}
                        <p><a href={ item.url }>Available learning resources<span class="[ visually-hidden ]"> for &ldquo;{ item.title }&rdquo;</span></a></p>
                    </div>
                </article>
            {/each}
        {/if}
    </div>
    {#if $filteredProducts.length > $perPage}
    <nav class="[ pagination ]" aria-label="pagination">
        <ul role="list">
        {#if offset > 0}
            <li><button class="[ link ]" on:click|preventDefault={changePage} data-page={page - 1}><span aria-hidden="true">&larr;</span><span class="[ visually-hidden ]">previous</span></button></li>
        {/if}
        {#each $pages as p, i}
        <li><button class="[ link ]{ page === i + 1 ? '[ link--current ]' : '' }" on:click|preventDefault={changePage} data-page={i + 1}>{i + 1}</button></li>
        {/each}
        {#if $filteredProducts.length > offset + $perPage}
            <li><button class="[ link ]" on:click|preventDefault={changePage} data-page={page + 1}><span class="[ visually-hidden ]">next</span><span aria-hidden="true">&rarr;</span></button></li>
        {/if}
        </ul>
    </nav>
    {/if}
</div>
