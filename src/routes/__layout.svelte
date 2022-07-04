<script lang="ts">
	import Header from '../components/header/Header.svelte';
	import Footer from '../components/footer/Footer.svelte';
	import '../app.scss';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		margin: 1rem;
		flex-grow: 1;
	}
</style>
