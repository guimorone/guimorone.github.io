import { Rating } from 'flowbite-react';
import type { FC } from 'react';
import type { StarsProps } from '../../@types/components';

const Stars: FC<StarsProps> = ({ rating }) => {
	return (
		<>
			<Rating size="xs" className="flex items-center md:hidden">
				<Rating.Star filled={rating >= 1} />
				<Rating.Star filled={rating >= 2} />
				<Rating.Star filled={rating >= 3} />
				<Rating.Star filled={rating >= 4} />
				<Rating.Star filled={rating >= 5} />
			</Rating>
			<Rating size="sm" className="hidden md:flex md:items-center">
				<Rating.Star filled={rating >= 1} />
				<Rating.Star filled={rating >= 2} />
				<Rating.Star filled={rating >= 3} />
				<Rating.Star filled={rating >= 4} />
				<Rating.Star filled={rating >= 5} />
			</Rating>
		</>
	);
};

export default Stars;
