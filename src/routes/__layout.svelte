<script lang="ts">
	import Header from '../components/header/Header.svelte';
	import '../app.scss';
</script>

<main>
	<Header />
	<div id="mainContent">
		<slot />
	</div>
</main>

<style>
	main {
		flex-grow: 1;
	}
	#mainContent {
		margin: 1rem;
	}
</style>
