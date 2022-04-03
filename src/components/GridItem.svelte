<script>
    import Card from './Card.svelte';
</script>

<Card>
    <img src="./assets/icon/close-button.svg" on:click={() => handleDelete(item.id)} alt="X" class="close">
    <p class="text-display">
        {item.text}
    </p>
</Card>

<style>
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
</style>