<script>
    import {onMount, onDestroy} from 'svelte';
    import {FeedbackStore} from '../stores';
    import {fade, scale} from 'svelte/transition';
    import FeedbackItem from './FeedbackItem.svelte';
    let feedback = [];

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
{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade>
    <FeedbackItem item={fb}/>
</div>  
{/each}