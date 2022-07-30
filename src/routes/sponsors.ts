import type { Sponsor, Sponsors } from './../types/sponsor';
import client from '../sanity/sanityClient';

export async function get() {
	let sponsors: Sponsors = await client.fetch(`*[_type == "sponsors"]{
        sponsorName,
        sponsorDescription,
        sponsorUrl,
		"sponsorLogo": sponsorLogo.asset->url,
        displayOrder
	  }`);

	sponsors.sort((a: Sponsor, b: Sponsor) => {
		return a.displayOrder - b.displayOrder;
	});

	return { body: { sponsors } };
}
