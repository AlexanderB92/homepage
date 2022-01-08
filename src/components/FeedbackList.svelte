<script>
    import FeedbackItem from './FeedbackItem.svelte';
    export let feedback = [];

</script>
<!-- For each data point, create a feedback Item -->
{#each feedback as fb (fb.id)}
    <FeedbackItem item={fb} on:delete-feedback/>
{/each}