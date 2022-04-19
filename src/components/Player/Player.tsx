import { VideoCameraIcon } from '@heroicons/react/outline';
import ReactPlayer from 'react-player';
import { YoutubeVideoData } from '../../types';

type PlayerProps = {
	video?: YoutubeVideoData;
};

const Player: React.FC<PlayerProps> = ({ video }) => {
	if (!video) {
		return (
			<div className="flex items-center justify-center h-full">
				<div className="text-center">
					<VideoCameraIcon className="w-10 h-10 mx-auto text-red-600" />
					<h3 className="mt-2 text-sm font-medium">No Video Selected</h3>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="p-7">
				<div className="relative col-span-2 row-span-4 overflow-hidden rounded-lg h-[60vh] bg-darken-gray ">
					{video && <ReactPlayer url={video.url} width="100%" height="100%" controls playing />}
				</div>
			</div>
			<div className="border-b pb-7 px-7 border-b-silent-gray">
				<h2 className="text-2xl font-bold">{video.title}</h2>
			</div>
			<p className="p-7 text-silent-gray line-clamp-5">{video.description || 'No Description'}</p>
		</div>
	);
};

export default Player;
