<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/schedule">Schedule</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">Team</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">Sponsors</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: center;
	}

	nav {
		width: 100vw;
		background-color: $tigresGrey;
	}

	ul {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem;
		list-style: none;
	}
	// header {
	// 	display: flex;
	// 	justify-content: center;
	// }

	// nav {
	// 	display: flex;
	// 	justify-content: center;
	// 	background-color: $tigresOrange;
	// }

	// ul {
	// 	position: relative;
	// 	padding: 0;
	// 	margin: 0;
	// 	height: 3em;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	list-style: none;
	// 	background: var(--background);
	// 	background-size: contain;
	// }

	// li {
	// 	position: relative;
	// 	height: 100%;
	// }

	// li.active::before {
	// 	--size: 6px;
	// 	content: '';
	// 	width: 0;
	// 	height: 0;
	// 	position: absolute;
	// 	top: 0;
	// 	left: calc(50% - var(--size));
	// 	border: var(--size) solid transparent;
	// 	border-top: var(--size) solid var(--accent-color);
	// }

	// nav a {
	// 	display: flex;
	// 	height: 100%;
	// 	align-items: center;
	// 	padding: 0 1em;
	// 	color: var(--heading-color);
	// 	font-weight: 700;
	// 	font-size: 0.8rem;
	// 	text-transform: uppercase;
	// 	letter-spacing: 0.1em;
	// 	text-decoration: none;
	// 	transition: color 0.2s linear;
	// }

	// a:hover {
	// 	color: var(--accent-color);
	// }
</style>
