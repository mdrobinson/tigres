<script lang="ts">
	import Game from '../components/Game.svelte';
	import type { Games } from '../types/game.js';
	let games: Games = $$props.games;

	const upcomingGames = games
		.filter((x) => {
			return new Date(x.date) >= new Date();
		})
		.sort((a, b) => b.date.getTime() - a.date.getTime());

	const previousGames = games.filter((x) => {
		return new Date(x.date) < new Date();
	});
</script>

<h1>Upcoming Games:</h1>
<section>
	{#each upcomingGames as game}
		<Game gameData={game} />
	{/each}
</section>

<h1>Previous Games:</h1>
<section>
	{#each previousGames as game}
		<Game gameData={game} />
	{/each}
</section>

<style type="text/scss">
</style>
