<script lang="ts">
	import type { Game } from '../types/game';
	export let gameData: Game;

	const formattedDate = new Date(gameData.date).toLocaleDateString('en-us', {
		month: 'long',
		day: '2-digit',
		year: 'numeric'
	});
</script>

<section class="game-card">
	<!-- <h2>{gameMonth} {gameDay}</h2> -->
	<h2 class="game-date">{formattedDate}</h2>

	<div class="game-information">
		<p><strong>Vs:</strong> {gameData.opponent}</p>
		<p>
			<strong>Location:</strong> <a target="_blank" href={gameData.mapsUrl}>{gameData.location}</a>
		</p>
		<p><strong>Time:</strong> {gameData.time}</p>
	</div>
	{#if gameData.tigresRuns && gameData.opponentRuns}
		<div class="score-container">
			<h2>Final Score:</h2>
			<p>Tigres de San Antonio - {gameData.tigresRuns}</p>
			<p>{gameData.opponent} - {gameData.opponentRuns}</p>
		</div>
	{/if}
</section>

<style type="text/scss">
	.game-card {
		width: 100%;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
		background-color: $tigresGrey;
		display: inline-block;
		box-shadow: 2px 1px 5px #333;

		@media only screen and (min-width: 768px) {
			width: 50%;
		}
	}

	h2.game-date {
		background-color: $white;
		margin: 0;
		text-transform: uppercase;
		text-align: center;
		border-radius: 0.25rem 0.25rem 0 0;
		border-bottom: 2px solid $tigresOrange;
		padding: 0.5rem 0;
	}

	.game-information {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}

	.score-container {
		padding-left: 1rem;
		background-color: $tigresOrange;
		text-align: center;
		border-radius: 0 0 0.25rem 0.25rem;

		h2 {
			padding: 0.25rem 0 0 0;
			margin: 0;
		}

		p {
			font-weight: bold;
			margin: 0;
		}
	}
</style>
