import Photo from '../Photo';
import Feed from '../Feed';
import ObjectFeed from '../Feed/ObjectFeed';
import { classNames } from '../../utils';
import type { FC } from 'react';
import type { PageProps } from '../../@types/components';
import Title from '../Title';

const Page: FC<PageProps> = ({ title, subtitle, photo, activities }) => {
	return (
		<div
			className={classNames(
				Array.isArray(activities) && 'lg:flex lg:justify-between lg:gap-x-12 space-y-12 lg:space-y-0',
				'w-full mb-auto'
			)}
		>
			<div className="w-full max-w-2xl flex flex-col -gap-1">
				<Title title={title} subtitle={subtitle} />
				{photo && (
					<Photo
						{...photo}
						className="object-cover"
						containerClassName="w-20 sm:w-28 md:w-32 lg:w-36 max-w-xs self-center mt-4"
					/>
				)}
			</div>
			{Array.isArray(activities) ? (
				<Feed activities={activities} />
			) : (
				<div className="space-y-12 mt-12">
					{Object.keys(activities).map((activitiesTitle, index) => (
						<ObjectFeed
							key={`object-feed-${title}-${activitiesTitle}-${index}`}
							title={activitiesTitle}
							activities={activities[activitiesTitle]}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Page;
