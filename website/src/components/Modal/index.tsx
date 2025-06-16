import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import type { FC } from 'react';
import type { ModalProps } from '../../@types/components';

const Modal: FC<ModalProps> = ({ open, onClose, Icon, title, subtitle, children }) => {
	return (
		<Dialog open={open} onClose={onClose} className="relative z-50">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-zinc-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
			/>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-lg bg-zinc-950 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
					>
						<div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
							<button
								type="button"
								onClick={onClose}
								className="rounded-md text-zinc-400 bg-zinc-950 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
							>
								<span className="sr-only">Close</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
							</button>
						</div>
						<div className="sm:flex sm:items-start">
							{Icon && (
								<div className="flex items-center justify-center mx-auto bg-teal-100 rounded-full size-12 shrink-0 sm:mx-0 sm:size-10">
									<Icon aria-hidden="true" className="text-teal-600 size-6 sm:size-5" />
								</div>
							)}
							<div className="w-full mt-3 space-y-8 sm:ml-4 sm:mt-0">
								<div className="space-y-1 text-center">
									<DialogTitle as="h3" className="text-lg font-semibold sm:text-2xl lg:text-3xl text-zinc-100">
										{title}
									</DialogTitle>
									{subtitle && <Description className="text-sm text-zinc-400">{subtitle}</Description>}
								</div>
								{children}
							</div>
						</div>
						<button
							type="button"
							onClick={onClose}
							className="inline-flex sm:hidden mt-8 justify-center w-full px-3 py-2 text-sm font-semibold text-zinc-900 bg-zinc-100 rounded-md shadow-sm ring-1 ring-inset ring-zinc\-300 hover:bg-zinc-200 sm:w-auto"
						>
							Close
						</button>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default Modal;
