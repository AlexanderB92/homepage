<script>
    import p5 from "../p5.min.js";
	export let id;
	export let sketch;

	import { onMount } from "svelte";

	onMount(function() {
	  let myp5 = new p5(sketch, id);
	});

</script>