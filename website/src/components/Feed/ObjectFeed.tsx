import Collapsible from '@/components/Collapsible';
import Feed from '@/components/Feed';
import type { FC } from 'react';
import type { ObjectFeedProps } from '@/types/components';

const ObjectFeed: FC<ObjectFeedProps> = ({ title, activities, currentSkill }) => {
	return (
		<Collapsible title={title}>
			<Feed activities={activities} currentSkill={currentSkill} />
		</Collapsible>
	);
};

export default ObjectFeed;
