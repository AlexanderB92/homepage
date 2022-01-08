<script>
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

	var currentDateTime = new Date();
	const greeting = currentDateTime.getHours > 12 ? "morning" : "evening";
		

	//Test data
	let feedbackData = [
		{
			id: 0,
			rating: 5,
			text: "Very happy"
		},
		{
			id: 1,
			rating: 4,
			text: "Fairly happy"
		},
		{
			id: 2,
			rating: 2,
			text: "Not happy"
		}
	]

	$: count = feedbackData.length;
	$: avg = feedbackData.reduce((sum, {rating}) => sum + rating, 0) / feedbackData.length;

	const addFeedback = (e) => {
		const newFeedback = e.detail;
		feedbackData = [...feedbackData, newFeedback];
	}

	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedbackData = feedbackData.filter((item) => item.id != itemId);
	}

</script>

<main class="container">
	<h1>Good {greeting}, Alexander!</h1>
	<FeedbackForm on:feedback-added={addFeedback}/>
	<FeedbackList feedback={feedbackData} on:delete-feedback={deleteFeedback}/>
	<FeedbackStats count={count} average={avg}/>
</main>

<style>
</style>