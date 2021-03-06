import client from '../sanity/sanityClient';
import type { Games } from '../types/game.js';

export async function get() {
	const games: Games = await client.fetch(`*[_type == "game" && !(_id in path('drafts.**'))]`);
	return { body: { games } };
}
