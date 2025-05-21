import { useState, type FC } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import type { CollapsableProps } from '../../@types/components';

const Collapsable: FC<CollapsableProps> = ({ title, children }) => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const handleCollapseToggle = (): void => setIsCollapsed(prev => !prev);

	return (
		<div className="space-y-6">
			<button
				onClick={handleCollapseToggle}
				className="flex items-center gap-x-4 text-zinc-100 hover:text-zinc-300 w-fit"
			>
				{isCollapsed ? (
					<ChevronDownIcon className="w-auto h-8" aria-hidden="true" />
				) : (
					<ChevronUpIcon className="w-auto h-8" aria-hidden="true" />
				)}
				<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
			</button>
			<Transition
				as="div"
				show={!isCollapsed}
				enter="ease-in duration-300"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="ease-out duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				{children}
			</Transition>
		</div>
	);
};

export default Collapsable;
