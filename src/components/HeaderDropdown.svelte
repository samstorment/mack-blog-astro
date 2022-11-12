<script lang="ts">
    import { fly, slide } from "svelte/transition";
    import { dropdownOpen } from "../stores/layout";
</script>


{#if $dropdownOpen}
    <ul transition:slide id="dropdown">
        <li>
            <a href="/blog">Blog</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
{/if}


<style>
    ul {
        position: absolute;
        top: 100%;
        background-color: var(--clr-bg);
        border: 1px solid var(--clr-border);
        right: .5em;
        display: grid;
        min-width: 200px;
        z-index: 1;
    }

    li {
        border-bottom: 1px solid var(--clr-border);
        background-color: inherit;
    }

    li:last-child {
        border-bottom: none;
    }

    #dropdown a {
        transition: none;
        display: block;
        padding: .75em;
    }

    #dropdown a {
        transform: none;
    }
</style>