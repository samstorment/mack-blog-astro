<script lang="ts">
    import { fly, scale, slide } from "svelte/transition";


    import type { Heading } from "../types/blog";
    import AsideLink from "./AsideLink.svelte";

    export let headings: Heading[];
    export let frontmatter: any;


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
                            text: frontmatter.title
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
        transition: width cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;
        border-left: 1px solid black;
        position: relative;
    }
    
    nav {
        position: sticky;
        top: 0;
    }

    ul {
        height: calc(100vh);
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: .5em;
        padding: .5em 1em;

    }

    .closed {
        width: 0;
        padding-right: 1.5em;
    }

    .closed nav {
        width: 0;
    }

    #back-to-top {
        font-weight: bold;
    }

    button {
        transform: translate(-50%);
        position: absolute;
        top: 0;
        width: 2em;
        height: 2em;
        border-radius: 2em;
        border: 1px solid black;
        background-color: white;
        cursor: pointer;
        z-index: 1;
        top: 1em;
        transition: transform cubic-bezier(0.77, 0, 0.175, 1) 100ms;
    }

    button:active {
        transform: scale(.95) translate(-50%);
    }

    @media (max-width: 1000px) {
        aside {
            display: none;
        }
    }
</style>