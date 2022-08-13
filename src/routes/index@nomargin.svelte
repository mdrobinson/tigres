<svelte:head>
	<title>Tigres de San Antonio</title>
	<meta name="description" content="Tigres de San Antonio" />
</svelte:head>
<div
	id="heroContainer"
	style="background-image: linear-gradient(90deg, rgba(30,66,96,0.8) 0%, rgba(30,66,96,0.5) 47%, rgba(30,66,96,0.8) 100%), url('./images/hero.jpg'); background-size: cover; background-repeat: no-repeat;"
>
	<img alt="Tigres de San Antonio Logo" src="./images/tigres_text_white.png" />
</div>
<section id="homeContent">
	<div id="mainBlurb">
		<h1>You know what's cool?</h1>

		<p>
			Community is cool. History is cool. Baseball is cool. Wrap these three things together and add
			cold cervesas and well -- that's just about as cool as it gets.
		</p>

		<div class="card-section">
			<img src="./images/practicephoto1.jpg" alt="Tigres and Abejas practice." />
			<div class="card-content revolution">
				<h2>The Sandlot Revolution</h2>
				<p>
					There is a Sandlot Baseball revolution happening. Everyday people are looking to create
					community, to be active, and to have pride. Sandlot baseball does all these and more. The
					Sandlot revolution has come to San Antonio and we are here to continue the cool.
				</p>
			</div>
		</div>
		<hr />

		<div class="card-section">
			<div class="card-content birth">
				<h2>Birth of the Tigres</h2>
				<p>
					The Tigres de San Antonio were created with this purpose in mind. We are here to look back
					and smile at the storied history of the San Antonio baseball community, from the San
					Antonio Bullets all the way to the Flying Chanclas de San Antonio, and continue the rich
					traditions of bringing people together for the love of the game of baseball. Sandlot
					style.
				</p>
			</div>
			<img src="./images/gamephoto1.jpeg" alt="Tigres in the dugout." />
		</div>

		<p class="footer-text">
			Come out, toss the ball around with us.<br />Take a couple of swings in the box, have fun, and
			be cool.
		</p>
	</div>
</section>

<style lang="scss">
	div#heroContainer {
		height: 100vh;
		width: 100vw;
		position: relative;
		bottom: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 !important;

		img {
			max-width: 100%;
			padding: 0 3rem;
		}
	}
	section#homeContent {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		margin: 0 1rem 1rem 1rem;

		.card-section {
			display: flex;
			flex-direction: column;
			img {
				max-width: 100%;
			}

			@media (min-width: 720px) {
				flex-direction: row;
				img {
					max-width: 50%;
				}
			}
		}

		.card-content {
			padding: 1rem 1.5rem;

			h2 {
				color: white;
			}

			&.revolution {
				background-color: $tigresOrange;
			}

			&.birth {
				background-color: white;
				h2,
				p {
					color: $tigresBlue;
				}
			}
		}

		@media (min-width: 720px) {
			#mainBlurb {
				width: 66%;
			}
		}

		h1 {
			width: 100%;
			margin-top: 0;
		}

		p {
			color: white;
		}

		div#logoWrapper {
			img {
				max-width: 500px;
			}
		}
		.footer-text {
			text-align: center;
		}
	}
</style>
