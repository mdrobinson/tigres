export type Game = {
	opponent: string;
	date: Date;
	location: string;
	time: string;
	mapsUrl: string;
	tigresRuns: number;
	opponentRuns: number;
};

export type Games = [game: Game];
