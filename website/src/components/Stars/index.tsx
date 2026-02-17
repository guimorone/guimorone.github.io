import { Fragment } from 'react';
import { classNames } from '@/utils';
import { LiaStar, LiaStarHalfAltSolid, LiaStarSolid } from 'react-icons/lia';
import type { FC } from 'react';
import type { StarsProps } from '@/types/components';

const STAR_VALUES = [1, 2, 3, 4, 5] as const;

function StarsRow({ rating, size }: { rating: number; size: 'xs' | 'sm' }) {
	const iconSize = size === 'xs' ? 14 : 18;
	return (
		<div
			className={classNames(
				size === 'xs' ? 'flex items-center md:hidden' : 'hidden md:flex md:items-center',
				'gap-x-0.5'
			)}
		>
			{STAR_VALUES.map(star => {
				const isHalfStar = rating >= star - 0.5 && rating < star;
				const isFilled = rating >= star;
				return (
					<Fragment key={star}>
						{isHalfStar ? (
							<LiaStarHalfAltSolid className="text-yellow-400" size={iconSize} />
						) : isFilled ? (
							<LiaStarSolid className="text-yellow-400" size={iconSize} />
						) : (
							<LiaStar className="text-zinc-300" size={iconSize} />
						)}
					</Fragment>
				);
			})}
		</div>
	);
}

const Stars: FC<StarsProps> = ({ rating }) => (
	<>
		<StarsRow rating={rating} size="xs" />
		<StarsRow rating={rating} size="sm" />
	</>
);

export default Stars;
