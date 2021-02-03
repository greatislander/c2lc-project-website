<script>
    import { onMount } from 'svelte';

    import { organizations, filteredOrganizations, filtered, perPage, pageCount, pages, category } from './organizationsStore.module.js'

    import RadioGroup from './components/RadioGroup.svelte';

    let categories = [
        "Accessible Education",
        "Coding Education"
    ];
     
    let offset = 0;
    let page = 1;
    
    function changePage(organization) {
        const button = organization.target.closest('button');
        page = parseInt(button.dataset.page);
        offset = (page - 1) * $perPage;
    }

    onMount(async () => {
		const res = await fetch(`/organizations.json`);
        $organizations = await res.json();
        offset = (page - 1) * $perPage;
        console.log($organizations);
	});
</script>

<div class="[ flow-lg ]">
    <div class="[ filter ] [ flow ]">
        <h2>Filter Organizations</h2>
        <div class="[ filters ]">
            <RadioGroup options={categories} bind:activeOption={$category} />
        </div>
        <div class="[ alert ] [ { $filteredOrganizations.length > 0 ? 'alert--info' : 'alert--error' } ]" role="alert">
        {#if $filtered && $filteredOrganizations.length === 0}
        <p>No organizations matched these filters.</p>
        {:else if $filteredOrganizations.length < $organizations.length}
        <p>Showing <strong>{$filteredOrganizations.length}</strong> of <strong>{$organizations.length}</strong> activities{#if $pageCount > 1}, page <strong>1</strong> of <strong>{$pageCount}</strong>{/if}.</p>
        {/if}
        </div>
    </div>
    <div class="[ flow-md ]" aria-label="organizations">
        {#if $filteredOrganizations.length > 0}
            {#each $filteredOrganizations.slice(offset, offset + $perPage) as item}
                <article class="[ organization ] [ two:three ]">
                    <div class="[ three:two__three ]">
                        <svg viewBox="0 0 570 380" class="placeholder"><rect width="570" height="380"></rect></svg>
                    </div>
                    <div class="[ three:two__two ] [ flow ]">
                        <h3>{ item.title }</h3>
                        <p class="[ metadata ]"><span class="[ tag ]">{ item.category }</span></p>
                        {#if item.description }
                        <p>{ item.description }</p>
                        {/if}
                        <p><a href={ item.link} rel="external">Visit Website<span class="[ visually-hidden ]"> for { item.title }</span></a></p>
                    </div>
                </article>
            {/each}
        {/if}
    </div>
    {#if $filteredOrganizations.length > $perPage}
    <nav class="[ pagination ]" aria-label="pagination">
        <ul role="list">
        {#if offset > 0}
            <li><button class="[ link ]" on:click|preventDefault={changePage} data-page={page - 1}><span aria-hidden="true">&larr;</span><span class="[ visually-hidden ]">previous</span></button></li>
        {/if}
        {#each $pages as p, i}
        <li><button class="[ link ]{ page === i + 1 ? '[ link--current ]' : '' }" on:click|preventDefault={changePage} data-page={i + 1}>{i + 1}</button></li>
        {/each}
        {#if $filteredOrganizations.length > offset + $perPage}
            <li><button class="[ link ]" on:click|preventDefault={changePage} data-page={page + 1}><span class="[ visually-hidden ]">next</span><span aria-hidden="true">&rarr;</span></button></li>
        {/if}
        </ul>
    </nav>
    {/if}
</div>
