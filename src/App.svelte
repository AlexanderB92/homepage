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
	import About from "./routes/About.svelte";

	//Misc
	const currentDateTime = new Date();
	const greeting = currentDateTime.getHours > 12 ? "morning" : "afternoon"; //Crude - ignore

	//Processing
	import P5Sketch from "./components/P5Sketch.svelte";

	//Routing
	const routes = {
		// Exact path
		"/": Home,
		"/About": About,
	};


</script>

<div class="AnimatedCanvas">
	<slot></slot>
</div>

<HeaderNavbar />
<P5Sketch {sketch} />
<main class="container">
	<h1>Good {greeting}, visitor!</h1>

	<!-- <AnimatedCanvas /> -->

	<Router {routes} />

	<img
		src="./assets/images/author.jpg"
		alt="x"
		class="author-image"
		id="toggle-mode"
	/>
	<FeedbackList />
	
</main>
<Footer />

<style>
	.author-image {
		display: flex;
		justify-content: center;
		height: 200px;
		width: auto;
		border-radius: 50%;
		border: whitesmoke;
		border-width: 2px;
		border-style: solid;
		margin: 20px;
	}
</style>
