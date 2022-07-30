<script>
	import { InstagramIcon, MailIcon } from 'svelte-feather-icons';
</script>

<footer>
	<div class="contact-icons">
		<a href="https://www.instagram.com/tigresdesanantonio/" target="_blank">
			<InstagramIcon size="32" />
		</a>
		<a href="mailto:tigresdesanantonio@gmail.com">
			<MailIcon size="32" />
		</a>
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: right;
		position: sticky;
		bottom: 0px;
	}

	div.contact-icons {
		color: white;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 0 1rem 1rem 0;

		a {
			text-decoration: none;
			color: white;
			margin-left: 0.5rem;

			&:hover {
				color: $tigresOrange;
			}
		}
	}
</style>
