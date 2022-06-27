export type Game = {
	opponent: string;
	date: Date;
	location: string;
	gametime: string;
	mapsUrl: string;
};

export type Games = [game: Game];
