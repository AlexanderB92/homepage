<script>
    import {FeedbackStore} from '../stores';
    import {fade, scale} from 'svelte/transition';
    import FeedbackItem from './FeedbackItem.svelte';

    //One way to handle subs to store
    // const unsubscribe = FeedbackStore.subscribe((data) => {feedback = data})
    // onMount(() => {
    //     console.log("mounted");
    // })
    // onDestroy(() => {
    //     unsubscribe();
    // })
    //Alternatively use store directy in template, which will sub and unsub automatically.

</script>
<!-- For each data point, create a feedback Item -->

<div class="card-grid">
{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade>
    <FeedbackItem item={fb}/>
</div>  
{/each}
</div>

<style>
    .card-grid {
        display: grid;
        grid-column-gap: 40px;
        grid-template-columns: auto auto;
    }
</style>