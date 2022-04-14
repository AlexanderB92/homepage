<script>
	//Svelte Components
	import { onMount } from "svelte";
	import Footer from "./components/Footer.svelte";
	import HeaderNavbar from "./components/HeaderNavbar.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import AnimatedCanvas from "./components/AnimatedCanvas.svelte";
	import {sketch} from "./components/BallAnimation.svelte"

	//Routing
	import Router from "svelte-spa-router";
	import Home from "./routes/Home.svelte";
	import Experience from "./routes/Experience.svelte";
	import CurrentWork from "./routes/CurrentWork.svelte";
	import Recreation from "./routes/Recreation.svelte";

	//Processing
	import P5Sketch from "./components/P5Sketch.svelte";

	//Routing
	const routes = {
		// Exact path
		"/": Home,
		"/Experience": Experience,
		"/CurrentWork": CurrentWork,
		"/Recreation": Recreation
	};


</script>
<HeaderNavbar />

<div id="processing-container">
	<P5Sketch {sketch} />
</div>
<main class="container">
	<div class="greeting-flag">
		<div>
			<h1 style="display:flex; justify-content:left;">Hello There!</h1>
			This is my homepage!
		</div>
		<img
			src="./assets/images/author.jpg"
			alt="x"
			class="author-image"
			id="toggle-mode"
		/>
	</div>
	<!-- <AnimatedCanvas /> -->
	<Router {routes} />
	<FeedbackList />
	
</main>
<Footer />

<style>
	.author-image {
		display: flex;
		justify-content: right;
		height: 200px;
		width: auto;
		border-radius: 50%;
		border: whitesmoke;
		border-width: 2px;
		border-style: solid;
		margin: 20px;
	}

	.greeting-flag {
  		display: flex;
  		align-items: center;
		justify-content: space-between;
	}
</style>
