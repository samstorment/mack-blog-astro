
<script lang="ts">
    import { onMount } from "svelte";
    import { fly, scale, slide } from "svelte/transition";



    let dark = false;

    $: theme = dark ? "moon" : "sun";

    function click() {
        dark = !dark;
        setTheme(dark ? "dark" : "light");
    }

    function setTheme(themeName: "dark" | "light") {
        document.documentElement.className = themeName;
        localStorage.setItem("theme", themeName);
    }

    onMount(() => {
        const selectedTheme: string = localStorage.getItem("theme") ?? "light";
        if (selectedTheme === "dark") dark = true;
        if (selectedTheme) setTheme(selectedTheme as "dark" | "light");
    });

</script>


<button 
    id="theme-toggle" on:click={click}   
    class="nav-button"    
    class:dark
    class:light={!dark}
>
    {#key dark}
        <i class={`fa-solid fa-${theme}`}
            in:fly={{x: -75}}
            out:fly={{x: 75}}
        />
    {/key}
</button>

<style>
    button {
        position: relative;
        overflow: hidden;

    }

    i {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        display: grid;
        place-items: center;
        place-content: center;
    }

    /* .dark {
        color: purple;
    }

    .light {
        color: rgb(241, 205, 0);
    } */
</style>
