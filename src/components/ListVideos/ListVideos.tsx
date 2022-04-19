import { useEffect, useState } from 'react';
import { YoutubeVideoData } from '../../types';
import clsx from 'clsx';
import { SearchIcon } from '@heroicons/react/outline';

type ListVideosProps = {
	searchResult: YoutubeVideoData[];
	history: YoutubeVideoData[];
	onClick: (video: YoutubeVideoData) => void;
};

const ListVideos: React.FC<ListVideosProps> = ({ searchResult, history, onClick }) => {
	const [isHistory, setHistory] = useState<boolean>(false);
	const [currentVideoList, setCurrentVideoList] = useState<YoutubeVideoData[]>(searchResult);

	useEffect(() => {
		if (isHistory) {
			setCurrentVideoList(history);
		} else {
			setCurrentVideoList(searchResult);
		}
	}, [isHistory, searchResult]);

	return (
		<aside className="col-span-3 bg-dark-gray md:col-span-1">
			<div className="flex flex-col">
				<div className="py-5 mx-auto">
					<div className="inline-flex items-center justify-center px-2 py-2 rounded-full gap-x-4 bg-light-gray">
						<span
							className={clsx(
								'transition duration-300 px-10 py-3 text-lg capitalize rounded-full cursor-pointer ',
								{
									'hover:bg-darken-gray/50': isHistory,
									'bg-darken-gray': !isHistory,
								}
							)}
							onClick={() => setHistory(false)}
						>
							videos
						</span>
						<span
							className={clsx(
								'transition duration-300 px-10 py-3 text-lg capitalize rounded-full cursor-pointer ',
								{
									'hover:bg-darken-gray/50': !isHistory,
									'bg-darken-gray': isHistory,
								}
							)}
							onClick={() => setHistory(true)}
						>
							history
						</span>
					</div>
				</div>
				<div className="px-4">
					<ul className="space-y-5 overflow-y-auto md:max-h-[85vh]">
						{currentVideoList.length === 0 && (
							<div className="flex items-center justify-center h-[85vh]">
								<div className="flex-grow text-center">
									<SearchIcon className="w-10 h-10 mx-auto text-silent-gray" />
									<h3 className="mt-2 text-sm font-medium">Videos not found</h3>
								</div>
							</div>
						)}
						{currentVideoList.map((video) => {
							return (
								<li
									className="flex items-center cursor-pointer gap-x-5"
									onClick={() => onClick(video)}
									key={video.id}
								>
									<div className="flex flex-shrink-0">
										<img
											src={video.thumbnail.url}
											width={video.thumbnail.width}
											height={video.thumbnail.height}
										/>
									</div>
									<div className="max-w-md">
										<div className="flex-1">
											<h3 className="font-bold leading-7 line-clamp-1">
												{video.title}
											</h3>
										</div>
										<p className="text-sm line-clamp-2 text-silent-gray">
											{video.description}
										</p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default ListVideos;
