<script>
	let firstName = 'Alexander';
	let lastName = 'Brandstrup';
	let showText = true;

	let users = [
		{
			id: 0,
			name: "John"
		},
		{
			id: 1,
			name: "James"
		},
		{
			id: 2,
			name: "Bob"
		}
	]

	function toggleText() {
		showText = showText == false ? true : false;

		users = [...users, {id: 3, name: "Jacob"}];
	}

	$: name = firstName + ' ' + lastName;
</script>

<main>
	<h1>Hello {name}!</h1>
	{#if showText}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{/if}
	<button on:click={toggleText}>Toggle Text</button>

	{#each users as user (user.id)}
		<h3>{user.id}: {user.name}</h3>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>