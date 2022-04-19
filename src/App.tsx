import { useEffect, useState } from 'react';
import ListVideos from './components/ListVideos/ListVideos';
import SearchInput from './components/SearchInput';
import BaseLayout from './layouts/BaseLayout';
import { YoutubeVideoData } from './types';
import Player from './components/Player/Player';

const App: React.FC = () => {
	const [searchResult, setSearchResult] = useState<YoutubeVideoData[]>([]);
	const [currentVideo, setCurrentVideo] = useState<YoutubeVideoData>();

	return (
		<BaseLayout>
			<section className="flex flex-col col-span-2">
				<SearchInput onSubmit={setSearchResult} />
				<Player video={currentVideo} />
			</section>
			<ListVideos searchResult={searchResult} onClick={setCurrentVideo} />
		</BaseLayout>
	);
};

export default App;
