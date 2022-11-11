<script lang="ts">
    import { fly, slide } from "svelte/transition";


    import type { Heading } from "../types/blog";
    import AsideLink from "./AsideLink.svelte";

    export let headings: Heading[];


    let open = true;

    $: arrow = open ? "fa-solid fa-angle-right" : "fa-solid fa-angle-left";

    const headingLevels = headings.map(h => h.depth);
    
    // lowest heading indetation level - meaning an h1 is lowest
    const minDepth = Math.min(...headingLevels);
    const maxDepth = Math.max(...headingLevels);
</script>

<aside 
    class:closed={!open}
>
    <button type="button" id="sidebar-toggle" on:click={() => open = !open}>
        <i class={arrow}></i>
    </button>
    {#if open}
    <nav>
        {#each headings as h, i }
            <AsideLink 
                heading={h} 
                index={i} 
                minDepth={minDepth}
                maxDepth={maxDepth}
            />
        {/each}
    </nav>
    {/if}
</aside>

<style>
    aside {
        position: relative;
        border-left: 1px solid black;
        min-width: 250px;
        transition: min-width cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms
    }
    
    aside nav {
        --nav-padding: 1em;
        height: calc(100vh - var(--nav-height));
        overflow: auto;
        padding: var(--nav-padding);
        display: flex;
        flex-direction: column;
        position: fixed;
        top: calc(50px);
        gap: .55em;
    }

    .closed {
        min-width: 0;
        padding-right: 1.5em;
    }

    button {
        transform: translate(-50%);
        position: absolute;
        width: 2em;
        height: 2em;
        border-radius: 2em;
        border: 1px solid black;
        background-color: white;
        cursor: pointer;
        z-index: 1;
        top: 1em;
    }

    @media (max-width: 1000px) {
        aside nav {
            position: static;
            padding: 0 1em;
            top: auto;

        }
    }
</style>