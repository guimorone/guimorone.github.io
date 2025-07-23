import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import type { FC } from 'react';
import type { BannerProps } from '../../types/components';

const Banner: FC<BannerProps> = ({ title = 'Hey, right here!', link }) => {
	const [isShowing, setIsShowing] = useState<boolean>(true);

	const handleCloseBanner = (): void => setIsShowing(false);

	return (
		<Transition
			as={Fragment}
			show={isShowing}
			enter="transition-opacity duration-75"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div className="fixed inset-x-0 bottom-0 pointer-events-none sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
				<div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-zinc-100 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
					<p className="text-sm leading-6 text-zinc-900 hover:text-zinc-700">
						<a href={link.url} target="_blank">
							<span className="font-semibold">{title}</span>
							<svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
								<circle cx={1} cy={1} r={1} />
							</svg>
							{link.label}&nbsp;<span aria-hidden="true">&rarr;</span>
						</a>
					</p>
					<button
						type="button"
						onClick={handleCloseBanner}
						className="-m-1.5 flex-none p-1.5 text-zinc-900 hover:text-zinc-700"
					>
						<span className="sr-only">Dismiss</span>
						<XMarkIcon className="size-5" aria-hidden="true" />
					</button>
				</div>
			</div>
		</Transition>
	);
};

export default Banner;
