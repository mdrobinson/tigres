import client from '../sanity/sanityClient';
import imageUrlBuilder from '@sanity/image-url/lib/types/builder';

const builder = imageUrlBuilder(client);

export async function get() {
	const query = `*[_type == "home"]{"heroUrl": heroimage.asset->url}`;
	const heroImage = await client.fetch(query);
	console.log(heroImage);
}
