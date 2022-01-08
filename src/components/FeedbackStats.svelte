<script>
    export let count;
    export let average;

    average = average.toFixed(1);
</script>

<div class="feedback-stats">
    <h4>{count} Total Reviews</h4>
    <h4>Ratings Average: {average}</h4>
</div>

<style>
    .feedback-stats {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
</style>