import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { CodeBracketSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';
import type { ModalProps } from '../../@types/components';

const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
	return (
		<Dialog open={open} onClose={onClose} className="relative z-50">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-zinc-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
			/>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
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
							<div className="flex items-center justify-center mx-auto bg-teal-100 rounded-full size-12 shrink-0 sm:mx-0 sm:size-10">
								<CodeBracketSquareIcon aria-hidden="true" className="text-teal-600 size-6" />
							</div>
							<div className="w-full mt-3 sm:ml-4 sm:mt-0">
								<DialogTitle
									as="h3"
									className="text-lg font-semibold text-center sm:text-2xl lg:text-3xl text-zinc-100"
								>
									{title}
								</DialogTitle>
								<div className="mt-8">{children}</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default Modal;
