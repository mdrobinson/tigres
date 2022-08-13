<script lang="ts">
	import { page } from '$app/stores';
	import { Instagram } from 'lucide-svelte';
	let innerWidth: number;
	let iconSize: number;

	$: innerWidth > 727 ? (iconSize = 48) : (iconSize = 32);
</script>

<svelte:window bind:innerWidth />

<header>
	<div id="instagramIcon">
		<a href="https://www.instagram.com/tigresdesanantonio/" target="_blank">
			<Instagram size={iconSize} />
		</a>
	</div>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/schedule'}>
				<a sveltekit:prefetch href="/schedule">Schedule</a>
			</li>
			<li class:active={$page.url.pathname === '/sponsors'}>
				<a sveltekit:prefetch href="/sponsors">Sponsors</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		top: 0px;
		z-index: 99999;
		margin: 0 5%;
		height: 100px;
		position: sticky;
		top: 0;

		@media (min-width: 720px) {
			flex-direction: row;
		}
	}

	div#instagramIcon {
		a {
			color: #fff;
			font-size: 65px;
			&:hover {
				color: $tigresOrange;
			}
			position: relative;
			bottom: 8px;

			@media (min-width: 720px) {
				bottom: 0px;
			}
		}
	}

	nav {
		display: flex;
		justify-content: flex-end;
		width: 100vw;
	}

	ul {
		display: flex;
		padding: 0.5rem;
		list-style: none;
		color: #fff;
		font-size: 1rem;

		@media (min-width: 720px) {
			font-size: 1.5rem;
		}

		li {
			margin: 0 1rem;

			&:hover {
				color: $tigresOrange;
			}
		}
	}

	a {
		color: inherit;
	}
</style>
