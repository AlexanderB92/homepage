<script>
	import FeedbackList from "./components/FeedbackList.svelte";

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
</script>

<main class="container">
	<h1>Hello, Alexander!</h1>
	<FeedbackList feedback={feedbackData}/>
</main>

<style>
</style>