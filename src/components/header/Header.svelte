<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/schedule'}>
				<a sveltekit:prefetch href="/schedule">Schedule</a>
			</li>
			<!-- <li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">Team</a>
			</li> -->
			<li class:active={$page.url.pathname === '/sponsors'}>
				<a sveltekit:prefetch href="/sponsors">Sponsors</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0px;
	}

	nav {
		width: 100vw;
		background-color: $tigresOrange;
		border-radius: 0 0 0.25rem 0.25rem;
		box-shadow: 2px 1px 5px #333;
		@media only screen and (min-width: 768px) {
			width: 75%;
		}
	}

	ul {
		display: flex;
		justify-content: space-around;
		padding: 0.5rem;
		list-style: none;
	}

	a {
		color: inherit;
	}
</style>
