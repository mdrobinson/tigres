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
	#mainContent {
		max-width: 100vw;
	}
</style>
