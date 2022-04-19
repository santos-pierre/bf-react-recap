import { useState } from 'react';
import ListVideos from './components/ListVideos/ListVideos';
import SearchInput from './components/SearchInput';
import BaseLayout from './layouts/BaseLayout';
import { YoutubeVideoData } from './types';
import Player from './components/Player/Player';

const App: React.FC = () => {
	const [searchResult, setSearchResult] = useState<YoutubeVideoData[]>([]);
	const [historyResult, setHistoryResult] = useState<YoutubeVideoData[]>([]);
	const [currentVideo, setCurrentVideo] = useState<YoutubeVideoData>();

	const handleClick = (video: YoutubeVideoData) => {
		setCurrentVideo(video);
		if (historyResult.length === 6) {
			setHistoryResult([...new Set([...historyResult.slice(1), video])]);
		} else {
			setHistoryResult([...new Set([...historyResult, video])]);
		}
	};

	return (
		<BaseLayout>
			<section className="flex flex-col col-span-2">
				<SearchInput onSubmit={setSearchResult} />
				<Player video={currentVideo} />
			</section>
			<ListVideos searchResult={searchResult} history={historyResult} onClick={handleClick} />
		</BaseLayout>
	);
};

export default App;
