import Collapsable from '../Collapsable';
import Feed from '../Feed';
import type { FC } from 'react';
import type { ObjectFeedProps } from '../../@types/components';

const ObjectFeed: FC<ObjectFeedProps> = ({ title, activities }) => {
	return (
		<Collapsable title={title}>
			<Feed activities={activities} />
		</Collapsable>
	);
};

export default ObjectFeed;
