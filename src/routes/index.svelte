<script lang="ts">
	let heroUrl = $$props.heroImage[0].heroUrl;
</script>

<svelte:head>
	<title>Tigres de San Antonio</title>
	<meta name="description" content="Tigres de San Antonio" />
</svelte:head>

<section>
	<h1>TIGRES DE SAN ANTONIO</h1>

	<img alt="Tigres de San Antonio" src={heroUrl} id="heroImage" />

	<p>You know what's cool?</p>

	<p>
		Community is cool. History is cool. Baseball is cool. Wrap these three things together and add
		cold cervesas and, well, that's just about as cool as it gets.
	</p>
	<p>
		There is a Sandlot Baseball revolution happening. Everyday people are looking to create
		community, to be active, and to have pride. Sandlot baseball does all these and more. The
		Sandlot revolution has come to San Antonio and we are here to continue the cool.
	</p>
	<p>
		The Tigres de San Antonio were created witht his purpose in mind. We are here to look back and
		smile at the storied history of the San Antonio baseball community, from the San Antonio Bullets
		all the way to the Flying Chanclas de San Antonio, and continue the rich traditions of bringing
		people together for the love of the game of baseball. Sandlot style.
	</p>
	<p>
		Come out, toss the ball around with us, take a couple of swings in the box, have fun, and be
		cool.
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	p {
		color: white;
	}

	img#heroImage {
		width: 100%;
	}
</style>
