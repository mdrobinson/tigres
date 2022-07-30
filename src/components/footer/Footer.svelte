<script>
	import { InstagramIcon, MailIcon } from 'svelte-feather-icons';
</script>

<footer>
	<a href="https://www.instagram.com/tigresdesanantonio/" target="_blank">
		<InstagramIcon size="24" />
	</a>
	<a href="mailto:tigresdesanantonio@gmail.com">
		<MailIcon size="24" />
	</a>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: space-around;
		position: sticky;
		bottom: 0px;
		// background-color: $tigresGrey;
		background-color: rgba(0, 0, 0, 0.8);
		border-top: 1px solid #333;
		padding: 0.5rem 1rem 0.5rem 0;
		opacity: 95%;
		a {
			text-decoration: none;
			margin-left: 0.5rem;
			color: $tigresOrange;

			&:hover {
				color: #333;
			}
		}
	}
</style>
