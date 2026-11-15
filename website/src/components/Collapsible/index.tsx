import { useId, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';
import type { CollapsibleProps } from '@/types/components';

const Collapsible: FC<CollapsibleProps> = ({ title, children }) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true);
	const panelId = useId();

	const handleCollapseToggle = (): void => setIsExpanded(prev => !prev);

	return (
		<div className="space-y-6">
			<button
				type="button"
				onClick={handleCollapseToggle}
				aria-expanded={isExpanded}
				aria-controls={panelId}
				className="flex items-center gap-x-4 text-zinc-100 hover:text-zinc-300 w-fit"
			>
				{isExpanded ? (
					<ChevronUpIcon className="w-auto h-8" aria-hidden="true" />
				) : (
					<ChevronDownIcon className="w-auto h-8" aria-hidden="true" />
				)}
				<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
			</button>
			<Transition
				as="div"
				id={panelId}
				show={isExpanded}
				unmount={false}
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

export default Collapsible;
