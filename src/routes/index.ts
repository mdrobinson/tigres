import client from '../sanity/sanityClient.js';

export async function get() {
	const heroImage = await client.fetch(`*[_type == "home"]{
		"heroUrl": heroimage.asset->url
	  }`);
	return { body: { heroImage } };
}
