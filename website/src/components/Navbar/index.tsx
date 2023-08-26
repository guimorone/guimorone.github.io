import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { BriefcaseIcon, NewspaperIcon, GlobeAltIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MY_PHOTO } from '../../constants/urls';
import { LANDING, ABOUT, JOBS, SOCIAL } from '../../constants/paths';

const navigation = [
	{ name: 'About', href: `#${ABOUT}`, Icon: NewspaperIcon },
	{ name: 'Jobs', href: `#${JOBS}`, Icon: BriefcaseIcon },
	{ name: 'Social', href: `#${SOCIAL}`, Icon: GlobeAltIcon },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	return (
		<header className="sticky inset-x-0 top-0 z-50 backdrop-blur-2xl">
			<nav className="flex items-center justify-between p-6 md:px-8" aria-label="Global">
				<div className="flex md:flex-1">
					<a href={`#${LANDING}`} className="-m-1.5 p-1.5">
						<span className="sr-only">Guilherme's photo</span>
						<img className="h-8 w-auto sm:h-10 md:h-12 rounded-full" src={MY_PHOTO} alt="Guilherme's photo" />
					</a>
				</div>
				<div className="flex md:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden md:flex md:gap-x-12">
					{navigation.map(item => (
						<a
							key={item.name}
							href={item.href}
							className="flex gap-x-1.5 items-center text-sm font-semibold leading-6 text-white hover:underline hover:underline-offset-2"
						>
							<item.Icon className="w-4 h-4" />
							<span>{item.name}</span>
						</a>
					))}
				</div>
			</nav>
			<Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-gray-500 to-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="flex items-center justify-between">
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-400"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/25">
							<div className="space-y-2 py-6">
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className="-mx-3 flex items-center gap-x-1.5 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
									>
										<item.Icon className="w-4 h-4" />
										<span>{item.name}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
