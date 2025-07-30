import Feed from '@/components/Feed';
import ObjectFeed from '@/components/Feed/ObjectFeed';
import Photo from '@/components/Photo';
import Title from '@/components/Title';
import { classNames } from '@/utils';
import type { FC } from 'react';
import type { PageProps } from '@/types/components';

const Page: FC<PageProps> = ({ title, subtitle, photo, activities }) => {
	return (
		<div
			className={classNames(
				Array.isArray(activities) && 'lg:flex lg:justify-between lg:gap-x-12 space-y-12 lg:space-y-0',
				'w-full mb-auto'
			)}
		>
			<div className="flex flex-col w-full max-w-2xl -gap-1">
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
				<div className="mt-12 space-y-12">
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
