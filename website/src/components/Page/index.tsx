import Photo from '../Photo';
import Feed, { type IFeedProps } from '../Feed';
import type { FC, ImgHTMLAttributes } from 'react';

interface IPageProps {
	title: string;
	subtitle?: string;
	photo?: ImgHTMLAttributes<HTMLElement>;
	activity: IFeedProps['activity'];
}

const Page: FC<IPageProps> = ({ title, subtitle, photo, activity }) => {
	return (
		<div className="lg:flex lg:justify-between lg:gap-x-12 space-y-12 lg:space-y-0">
			<div className="w-full max-w-2xl flex flex-col -gap-1">
				<h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h2>
				{subtitle && <p className="mt-6 text-base text-zinc-300 text-justify">{subtitle}</p>}
				{photo && (
					<Photo
						{...photo}
						className="object-cover"
						containerClassName="w-20 sm:w-28 md:w-32 lg:w-36 max-w-xs self-center mt-4"
					/>
				)}
			</div>
			<Feed activity={activity} />
		</div>
	);
};

export default Page;
