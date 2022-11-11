<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import type { Heading } from '../types/blog';

    export let heading: Heading;
    export let index: number;
    export let minDepth: number;
    export let maxDepth: number;

    let visible = false;

    let delay = 0;

    const baseIndentationLevel = Math.max(0, heading.depth - minDepth);
    const indentationPixels = 20;
    const indentation = baseIndentationLevel * indentationPixels;

    onMount(() => {
        delay = index * 50;
        visible = true;
    });
</script>

{#if visible}
<a
    title={heading.text}
    in:fly={{x: 1500, duration: 250, delay }}
    href={`#${heading.slug}`}
>
    <span
        style={`margin-left: ${indentation}px`}
    >
        {heading.text}
    </span>
</a>
{/if}

<style>

    a {
        /* outline: 1px solid limegreen; */
        display: flex;
        text-decoration: none;
        color: black;
        padding: .5em;
        position: relative;
    }


    span {
        flex: 1;
        /* outline: 1px solid turquoise; */
        display: flex;
        align-items: center;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    a:hover {
        /* outline: 1px solid black; */
    }

    a::after,
    a::before {
        display: block;
        position: absolute;
        content: '';
        height: 1px;
        width: 0;
        bottom: 0;
        left: 0;
        background-color: black;
        transition: width ease-in-out 200ms;
        border-radius: 1em;
    }

    a::before {
        top: 0;
        color: red;
    }

    a:focus-within {
        outline: none;
    }

    a:hover::after,
    a:hover::before,
    a:focus-within::after,
    a:focus-within::before {
        width: 100%;
    }

</style>