import type { SanityClient } from '@sanity/client';
import SanityClientConstructor from '@sanity/client';
import type { Games } from '../types/game.js';

const client: SanityClient = SanityClientConstructor({
	projectId: 'qjjrnahz',
	dataset: 'production',
	apiVersion: '2022-06-26',
	useCdn: false
});

export async function get() {
	const games: Games = await client.fetch(`*[_type == "game"]`);
	return { body: { games } };
}
