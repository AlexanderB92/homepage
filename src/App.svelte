<script>
	//Svelte Components
	import { onMount } from "svelte";
	import Footer from "./components/Footer.svelte";
	import HeaderNavbar from "./components/HeaderNavbar.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import AnimatedCanvas from "./components/AnimatedCanvas.svelte";

	//Routing
	import Router from "svelte-spa-router";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";

	//Misc
	const currentDateTime = new Date();
	const greeting = currentDateTime.getHours > 12 ? "morning" : "evening";

	//Routing
	const routes = {
		// Exact path
		"/": Home,
		"/About": About,
	};

	//Processing
	import P5Sketch from "./components/P5Sketch.svelte";

	let sketch = function (p5) {
		let canvas;
		let randX = 0;
		let randY = 0;

		p5.setup = () => {
			canvas = p5.createCanvas(720, 400);
		};

		p5.draw = () => {
			p5.background(64);
			p5.ellipse(randX, randY, 20, 20);
			randX = randX+1;
			randY = randY+1;

			if(randX == canvas.width) {
				randX = 0;
			}
			if(randY == canvas.height) {
				randY = 0;
			}
		};
	};
</script>

<HeaderNavbar />

<main class="container">
	<h1>Good {greeting}, fellow traveler!</h1>

	<AnimatedCanvas />

	<Router {routes} />

	<img
		src="./assets/images/author.jpg"
		alt="x"
		class="author-image"
		id="toggle-mode"
	/>
	<FeedbackList />
	<P5Sketch {sketch} />
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
