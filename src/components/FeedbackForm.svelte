<script>
    import {v4 as uuidv4} from 'uuid';
    import Card from './Card.svelte';
    import Button from './Button.svelte';
    import RatingSelect from './RatingSelect.svelte';
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher();

    let text = '';
    let rating = 5;
    let btnDisabled = true;
    let minLength = 10;
    let message;

    const handleRatingSelect = (e) => {
        rating = e.detail;
    }

    const handleInput = () => {
        if(text.trim().length <= minLength) {
            message = `Input must be atleast ${minLength} characters`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }
    }

    const handleSubmit = () => {
        if(text.trim.length <= minLength ) {
            const newFeedback = {
                id: uuidv4(),
                text: text,
                rating: +rating
            }

            dispatch('feedback-added', newFeedback);
        }
    }

</script>

<Card>
    <header>
        <h2>How would you rate your experience?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect selected={rating} on:rating-select={handleRatingSelect}/>
        <div class="input-group">
            <input type="text" on:input={handleInput} bind:value={text} placeholder="Write your feedback here">
            <Button type="submit" disabled={btnDisabled}>Send</Button>
        </div>
        {#if message}
            <div class="message">
            {message}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

    .message{
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>