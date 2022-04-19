import { useState } from 'react';
import ListVideos from './components/ListVideos/ListVideos';
import SearchInput from './components/SearchInput';
import BaseLayout from './layouts/BaseLayout';
import { YoutubeVideoData } from './types';

const App: React.FC = () => {
	const [searchResult, setSearchResult] = useState<YoutubeVideoData[]>([]);

	return (
		<BaseLayout>
			<section className="flex flex-col col-span-2">
				<SearchInput onSubmit={setSearchResult} />
				<div className="col-span-2 row-span-4 bg-darken-gray">Video PLayer</div>
			</section>
			<ListVideos searchResult={searchResult} />
		</BaseLayout>
	);
};

export default App;
