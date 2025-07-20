import { Fragment } from 'react';
import { LiaStar, LiaStarHalfAltSolid, LiaStarSolid } from 'react-icons/lia';
import { classNames } from '../../utils';
import type { FC, JSX } from 'react';
import type { StarsProps } from '../../types/components';

const Stars: FC<StarsProps> = ({ rating }) => {
	const renderStars = (size: 'xs' | 'sm'): JSX.Element => {
		const iconSize = size === 'xs' ? 14 : 18;

		return (
			<div
				className={classNames(
					size === 'xs' ? 'flex items-center md:hidden' : 'hidden md:flex md:items-center',
					'gap-x-0.5'
				)}
			>
				{[1, 2, 3, 4, 5].map((star, index) => {
					const isHalfStar = rating >= star - 0.5 && rating < star;
					const isFilled = rating >= star;

					return (
						<Fragment key={`star-${rating}-${star}-${index}`}>
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
	};

	return (
		<>
			{renderStars('xs')}
			{renderStars('sm')}
		</>
	);
};

export default Stars;
