export type YoutubeVideoData = {
	id: string;
	url: string;
	thumbnail: {
		height: number;
		url: string;
		width: string;
	};
	publishedAt: string;
	title: string;
	description: string;
	channelId: string;
};
