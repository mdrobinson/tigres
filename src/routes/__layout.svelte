<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
</script>

<Header />
<main>
	<slot />
</main>

<!-- <footer>
	<p>Footer Goes Here</p>
</footer> -->
<style>
	main {
		margin: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	/*
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	} */
</style>
