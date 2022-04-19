import { YoutubeVideoData } from '../../types';

type ListVideosProps = {
	searchResult: YoutubeVideoData[];
	onClick: (video: YoutubeVideoData) => void;
};

const ListVideos: React.FC<ListVideosProps> = ({ searchResult, onClick }) => {
	return (
		<aside className="col-span-3 bg-dark-gray md:col-span-1">
			<div className="flex flex-col">
				<div className="py-5 mx-auto">
					<div className="inline-flex items-center justify-center px-2 py-2 rounded-full gap-x-4 bg-light-gray">
						<span className="px-10 py-3 text-lg capitalize rounded-full bg-darken-gray">
							videos
						</span>
						<span className="px-10 py-3 text-lg capitalize rounded-full ">history</span>
					</div>
				</div>
				<div className="px-4">
					<ul className="space-y-5 overflow-y-auto md:max-h-[85vh]">
						{searchResult.map((video) => {
							return (
								<li
									className="flex items-center cursor-pointer gap-x-5"
									onClick={() => onClick(video)}
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
