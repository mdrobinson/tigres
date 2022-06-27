<script lang="ts">
	import type { Game } from '../types/game';
	export let gameData: Game;

	const formattedDate = new Date(gameData.date).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
</script>

<section class="game-card">
	<h2>{formattedDate}</h2>
</section>

<style type="text/scss">
	.game-card {
		width: 100%;
		border: 1px solid $tigresGrey;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
		background-color: $tigresGrey;
	}
	h2 {
		text-align: center;
	}
</style>
