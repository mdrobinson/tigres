<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	let games = $$props.games;
	console.log(games);
</script>

<svelte:head>
	<title>Tigres de San Antonio</title>
	<meta name="description" content="Tigres de San Antonio" />
</svelte:head>

<section>
	<h1>TIGRES DE SAN ANTONIO</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
