<script>
	//Svelte Components
	import Footer from './components/Footer.svelte';
	import HeaderNavbar from './components/HeaderNavbar.svelte';
	import FeedbackList from './components/FeedbackList.svelte';
	import AnimatedCanvas from './components/AnimatedCanvas.svelte';

	const currentDateTime = new Date();
	const greeting = currentDateTime.getHours > 12 ? "morning" : "evening";
</script>

<HeaderNavbar />

<main class="container">
	<h1>Good {greeting}, fellow traveler!</h1>

	<AnimatedCanvas />

	<img
		src="./assets/images/author.jpg"
		alt="x"
		class="author-image"
		id="toggle-mode"
	/>

	<!-- <FeedbackForm /> -->
	<FeedbackList />
</main>

<Footer />

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
