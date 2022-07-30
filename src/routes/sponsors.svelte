<script lang="ts">
	import SponsorCard from '../components/SponsorCard.svelte';

	let sponsors = $$props.sponsors;
	console.log(sponsors);
</script>

<svelte:head>
	<title>Sponsors</title>
	<meta name="description" content="Sponsors of the Tigres de San Antonio" />
</svelte:head>

<div class="content">
	<h1>Sponsors</h1>

	{#each sponsors as sponsor}
		<SponsorCard sponsorData={sponsor} />
	{/each}
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
