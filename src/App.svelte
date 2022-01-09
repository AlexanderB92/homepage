<script>
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

	const currentDateTime = new Date();
	const greeting = currentDateTime.getHours > 12 ? "morning" : "evening";
</script>

<main class="container">
	<h1>Good {greeting}, Alexander!</h1>
	<FeedbackForm />
	<FeedbackList />
	<FeedbackStats />
</main>

<style>
</style>