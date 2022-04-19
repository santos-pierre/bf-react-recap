import { SearchIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import axios from 'axios';
import { YoutubeVideoData } from '../../types';

type SearchInputProps = {
	onSubmit: (data: YoutubeVideoData[]) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSubmit }) => {
	const [search, setSearch] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search.trim().length !== 0) {
			const responseSearch = await axios.get('https://www.googleapis.com/youtube/v3/search', {
				params: {
					key: import.meta.env.VITE_YOUTUBE_API,
					q: search,
					maxResults: 6,
				},
			});
			const videoIds: string[] = responseSearch.data.items.map((item: any) => item.id.videoId);

			if (videoIds.length !== 0) {
				const responseVideos = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
					params: {
						key: import.meta.env.VITE_YOUTUBE_API,
						part: 'snippet',
						id: videoIds.join(),
					},
				});

				const data: YoutubeVideoData[] = responseVideos.data.items.map(({ id, snippet }: any) => {
					return {
						id,
						url: `https://www.youtube.com/watch?v=${id}`,
						thumbnail: snippet.thumbnails.default,
						publishedAt: snippet.publishedAt,
						title: snippet.title,
						description: snippet.description,
						channelId: snippet.channelId,
					};
				});
				onSubmit(data);
			}
		}
	};

	return (
		<form className="inline-flex justify-center py-3 bg-dark-gray lg:px-40" onSubmit={handleSubmit}>
			<div className="relative min-w-full mt-1 rounded-md shadow-sm">
				<input
					type="text"
					name="search"
					id="search-input"
					className="block w-full py-3 pl-5 pr-20 border-transparent rounded-full bg-light-gray text-silent-gray"
					placeholder="Search Video"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className="absolute inset-y-0 right-0 m-2 flex items-center rounded-full bg-[#464350] p-4">
					<SearchIcon className="w-6 h-6 text-silent-gray" />
				</div>
			</div>
		</form>
	);
};

export default SearchInput;
