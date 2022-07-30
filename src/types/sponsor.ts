export type Sponsor = {
	sponsorDescription: string;
	sponsorName: string;
	sponsorUrl: string;
	sponsorLogo: string;
	displayOrder: number;
};

export type Sponsors = [sponsor: Sponsor];
