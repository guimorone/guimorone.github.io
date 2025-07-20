import Collapsable from '../Collapsable';
import Feed from '../Feed';
import type { FC } from 'react';
import type { ObjectFeedProps } from '../../types/components';

const ObjectFeed: FC<ObjectFeedProps> = ({ title, activities, currentSkill }) => {
	return (
		<Collapsable title={title}>
			<Feed activities={activities} currentSkill={currentSkill} />
		</Collapsable>
	);
};

export default ObjectFeed;
