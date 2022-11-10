<script context="module">
    let count = 0;
</script>

<script lang="ts">
    import { onMount } from "svelte";

    import { fly } from "svelte/transition";

    export let author: string;
    export let title: string;
    export let slug: string;
    export let thumbnail: string | undefined;
    export let date: string;
    export let preview: string;

    let visible = false;

    const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

    onMount(() => {

        setTimeout(() => {
            visible = true;
            count++;
        }, count * 250);
    })
</script>

{#if visible}
<a class="post"
    class:has-thumbnail={thumbnail} 
    href={`/blog/${slug}`} 
    style={thumbnail && `background-image: url(${thumbnail})`}
    transition:fly={{x: rand(-500, 500), y: rand(-500, 500), delay: rand(0, 500), duration: rand(500, 1000)}}
>
    <h3>{title}</h3>
    <p>{new Date(date).toLocaleDateString()}</p>
    <p>{author}</p>
    <p class="preview">{preview}</p>
</a>
{/if}


<style>
    .post {
        flex: 1;
        padding: 1em;
        outline: 1px solid black;
        color: black;
        text-decoration: none;
        transition-property: scale;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        transform-origin: center;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        background-color: white;
        background-size: cover;
        text-shadow: 0 0 1em 0 gray;
        background-position: center;
    }

    .post h3 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
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
        color: rgb(117, 117, 117);
        margin-top: auto;
    }

    .has-thumbnail p,
    .has-thumbnail h3 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
        text-shadow: 1px 1px 3px black;
    }
</style>