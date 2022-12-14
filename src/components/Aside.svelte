<script lang="ts">
    import { fly, scale, slide } from "svelte/transition";


    import type { Heading } from "../types/blog";
    import AsideLink from "./AsideLink.svelte";

    export let headings: Heading[];
    export let title: string;


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
    <nav>
        <button type="button" id="sidebar-toggle" on:click={() => open = !open}>
            <i class={arrow}></i>
        </button>
        {#if open}
            <ul transition:scale>
                <li id="back-to-top">
                    <AsideLink 
                        heading={{
                            depth: 0,
                            slug: "article-title",
                            text: title
                        }}
                        index={0}
                        minDepth={minDepth}
                        maxDepth={maxDepth}
                    />
                </li>
                {#each headings as h, i }
                    <li>
                        <AsideLink 
                            heading={h} 
                            index={i} 
                            minDepth={minDepth}
                            maxDepth={maxDepth}
                        />
                    </li>
                {/each}
            </ul>
        {/if}
    </nav>
</aside>

<style>
    aside {
        flex-shrink: 0;
        width: 250px;

        transition-property: width;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition-duration: 250ms;

        border-left: 1px solid var(--clr-border);
        position: relative;
    }
    
    nav {
        position: sticky;
        top: 0;
    }
    
    ul {
        font-size: 1.1rem;
        height: calc(100vh);
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: .2em;
        padding: .5em 1em;

    }

    .closed {
        width: 0;
        min-height: 100vh;
        /* Lines up with heading button width and margin */
        padding-right: 2.5em;
    }

    .closed nav {
        width: 0;
        height: 0;
    }

    #back-to-top {
        font-weight: bold;
        font-size: 1.2rem;
    }

    button {
        transform: translate(-50%);
        position: absolute;
        top: 0;
        width: 2em;
        height: 2em;
        border-radius: 2em;
        border: 1px solid var(--clr-border);
        background-color: var(--clr-bg);
        color: var(--clr-font);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1;
        top: 1em;
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 100ms;
    }

    button:active {
        transform: scale(.95) translate(-50%);
    }

    @media (max-width: 800px) {
        aside {
            display: none;
        }
    }
</style>