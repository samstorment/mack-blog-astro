<script context="module">
    let count = 0;
</script>

<script lang="ts">
    import { onMount } from "svelte";


    import { fly, slide, scale, fade } from "svelte/transition";
    import { getPostFormattedDate } from "../util/date";
    import { rand } from "../util/util";

    export let author: string;
    export let title: string;
    export let slug: string;
    export let thumbnail: string | undefined;
    export let date: string;
    export let preview: string;

    let visible = false;

    let trans = { x: rand(-1000, 1000), y: rand(-1000, 1000), duration: rand(200, 800), delay: 0 };

    onMount(() => {

        visible = true;

        trans.delay = count++ * 40;

        if (window.innerWidth < 1000) {
            trans = { x: -500, y: 0, duration: 500, delay: count * 100  }
        }

    })
</script>

{#if visible}
    <a class="post"
        class:has-thumbnail={thumbnail} 
        href={`/blog/${slug}`} 
        style={thumbnail && `background-image: url(${thumbnail})`}
        transition:fly|local={trans}
    >
        <div class="post-title-container">
            <h3>{title}</h3>
            <p class="date">{getPostFormattedDate(date)}</p>
        </div>
        <!-- <p>{author}</p> -->
        <p class="preview">{preview}</p>
    </a>
{/if}


<style>
    .post {
        flex: 1;
        padding: .75em;
        outline: 1px solid var(--clr-border);
        color: var(--clr-font);
        text-decoration: none;
        transition-property: scale;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        transform-origin: center;
        display: flex;
        flex-direction: column;
        background-color: var(--clr-bg);
        background-size: cover;
        text-shadow: 0 0 1em 0 gray;
        background-position: center;
        min-width: 250px;
        position: relative;
        gap: .25em;
    }

    .post h3 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        /* font-size: 1rem; */
        line-height: 1.2;
    }

    .post p {
        white-space: nowrap;
        object-fit: contain;
    }

    .post:hover {
        box-shadow: 0 0 1em 0 gray;
    }

    .post:active {
        scale: .95;
    }

    p.preview {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        color: var(--clr-font-light);
        font-size: .9rem;
        margin-top: auto;
    }

    .has-thumbnail p,
    .has-thumbnail h3 {
        color: var(--clr-bg);
        text-shadow: 1px 1px 5px var(--clr-font);
    }

    .date {
        /* background-color: rgb(224, 224, 224); */
        /* background-color: var(--clr-bg);
        border: 1px solid var(--clr-border); */
        /* padding: .1em .5em; */
        /* width: fit-content; */
        font-size: .85rem;
        color: var(--clr-font-light);
        /* color: black; */
        /* text-shadow: none; */
        margin-left: auto;
    }

    .post-title-container {
        display: flex;
        gap: .5em;
        align-items: flex-start;
    }
</style>