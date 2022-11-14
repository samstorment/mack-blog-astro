<script lang="ts">
    import { onMount } from "svelte";
    import Window from "../components/os/Window.svelte";


    let visible = false;

    function close() {
        visible = false;
    }

    onMount(() => {
        visible = true;
    })
</script>



{#if visible}
    <Window
        x={50}
        y={50}
        width={400}
        height={300}
        title="My Window!" 
        center
        {close}
    >
        <div>Hello everyone!!!</div>
    </Window>
{/if}