<script lang="ts">
	import type { Sponsor } from '../types/sponsor';
	export let sponsorData: Sponsor;
</script>

<section class="sponsor-card">
	<img src={sponsorData.sponsorLogo} alt={sponsorData.sponsorName} />
	<h2>{sponsorData.sponsorName}</h2>
	<p>{sponsorData.sponsorDescription}</p>
	<p>
		<a href={sponsorData.sponsorUrl} target="_blank">Learn More</a>
	</p>
	<hr />
</section>

<style lang="scss">
	img {
		width: 100%;
	}
	h2 {
		color: white;
		text-align: center;
		margin-top: 1rem;
		font-size: 2em;
	}
	p {
		color: white;
		text-align: center;
	}
	a {
		color: $tigresOrange;
		font-weight: bold;
		font-size: 1.2em;
	}
	hr {
		margin: 3rem 0;
	}
</style>
