<script context="module">
    let count = 0;
</script>

<script lang="ts">
    import { onMount, tick } from "svelte";
    import { fly, scale, slide } from "svelte/transition";
    import { rand } from "../util/util";


    interface Photo {
        text: string;
        url: string;
    }

    export let photo: Photo;

    let visible = false;

    let img: HTMLImageElement;
    let container: HTMLAnchorElement;

    const randCoord = () => rand(-1000, 1000);

    const x = randCoord();
    const y = randCoord();
    let delay = 0;

    onMount(async () => {
        visible = true;
        delay = count++ * 100;
    });

    const { text, url } = photo;
</script>

{#if visible}
    <a class="img-container" href={url} target="_blank" rel="noreferrer" 
        bind:this={container}
        title={text}
        transition:fly={{x, y, delay}}
    >
        <img src={url} alt={text} bind:this={img} />
        <p>{text}</p>
    </a>
{/if}


<style>
    .img-container {
        display: flex;
        flex-direction: column;
        position: relative;
        border: 1px solid black;
        /* align-items: flex-end; */
        flex: 1;
        max-height: 200px;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        /* object-position: top; */
        object-position: center;
    }

    p {
        border-top: 1px solid black;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: .5em;
        margin-top: auto;
        width: 100%;
    }

    img:hover {
        object-fit: contain;
    }
</style>