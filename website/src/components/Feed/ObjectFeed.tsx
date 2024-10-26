import { useState, type FC } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Feed from '../Feed';
import type { ObjectFeedProps } from '../../@types/components';

const ObjectFeed: FC<ObjectFeedProps> = ({ title, activities }) => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const handleCollapseToggle = (): void => setIsCollapsed(prev => !prev);

	return (
		<div className="space-y-6">
			<button
				onClick={handleCollapseToggle}
				className="flex items-center gap-x-4 text-zinc-100 hover:text-zinc-300"
			>
				{isCollapsed ? (
					<ChevronDownIcon className="h-8 w-auto" aria-hidden="true" />
				) : (
					<ChevronUpIcon className="h-8 w-auto" aria-hidden="true" />
				)}
				<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
			</button>
			<Transition
				as="div"
				show={!isCollapsed}
				enter="ease-out duration-300"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Feed activities={activities} />
			</Transition>
		</div>
	);
};

export default ObjectFeed;