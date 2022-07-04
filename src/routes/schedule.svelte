<script lang="ts">
	import GameCard from '../components/GameCard.svelte';
	import type { Game, Games } from '../types/game.js';
	let games: Games = $$props.games;

	const upcomingGames = games
		.filter((x) => {
			return new Date(x.date) >= new Date();
		})
		.sort((a: Game, b: Game) => {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
		});

	const previousGames = games.filter((x) => {
		return new Date(x.date) < new Date();
	});
</script>

<h1>Upcoming Games:</h1>
<section id="upcomingGames">
	{#each upcomingGames as game}
		<GameCard gameData={game} />
	{/each}
</section>

<h1>Previous Games:</h1>
<section id="previousGames">
	{#each previousGames as game}
		<GameCard gameData={game} />
	{/each}
</section>

<style type="text/scss">
	#upcomingGames,
	#previousGames {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
