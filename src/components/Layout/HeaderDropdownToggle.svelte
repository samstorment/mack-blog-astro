
<script lang="ts">
    import { fade, fly, scale, slide } from "svelte/transition";
    import { dropdownOpen } from "../../stores/layout";


    $: direction = $dropdownOpen ? "up" : "down";

</script>


<button 
    id="theme-toggle" 
    class="nav-button"
    on:click={() => $dropdownOpen = !$dropdownOpen}             
>
    {#key $dropdownOpen}
        <i class={`fa-solid fa-caret-${direction}`}
            transition:scale
        />
    {/key}
</button>

<style>
    button {
        position: relative;
        overflow: hidden;
        margin-right: 1em;
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
</style>
