<script>
	import Footer from './components/Footer.svelte'
	import HeaderNavbar from './components/HeaderNavbar.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

	const currentDateTime = new Date();
	const greeting = currentDateTime.getHours > 12 ? "morning" : "evening";
</script>

<HeaderNavbar />

<main class="container">
	<h1>Good {greeting}, Alexander!</h1>

	<img src="./assets/images/author.jpg" alt="x" class="author-image" id="toggle-mode" on:click={toggleMode}>

	<FeedbackForm />
	<FeedbackList />
	<FeedbackStats />
</main>

<Footer/>

<style>
	.author-image {
		height: 200px;
		width: auto;
		border-radius: 50%;
		border: whitesmoke;
		border-width: 2px;
		border-style: solid;
	}
</style>