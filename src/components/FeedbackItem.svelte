<script>
    import {createEventDispatcher} from 'svelte';
    import Card from './Card.svelte';
    export let item;

    const dispatch = createEventDispatcher();

    const handleDelete = (itemId) => {
        dispatch('delete-feedback', itemId);
    }
</script>

<Card>
    <div class="num-display">
        {item.rating}
    </div>
    <img src="./assets/icon/close-button.svg" on:click={() => handleDelete(item.id)} alt="X" class="close">
    <p class="text-display">
        {item.text}
    </p>
</Card>

<style>
    .num-display {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        background: rgb(202, 101, 61);
        color: #fff;
        border: 1px #ffffff solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 19px;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
</style>