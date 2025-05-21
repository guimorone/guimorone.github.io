import { useState, Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from './config';
import { classNames } from '../../utils';
import { HOME } from '../../constants/paths';

export default function Navbar() {
	const { pathname } = useLocation();
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	const handleOpenMobileMenu = (): void => setMobileMenuOpen(true);
	const handleCloseMobileMenu = (): void => setMobileMenuOpen(false);

	return (
		<header className="sticky inset-x-0 top-0 z-40 backdrop-blur-md">
			<nav className="shadow-md" aria-label="Global">
				<div className="flex items-center justify-between w-full h-auto px-4 py-4 mx-auto max-w-7xl max-h-20 sm:py-6 lg:px-8 gap-x-2">
					<div className="flex xl:flex-1">
						<Link to={HOME} className="-m-1.5 p-1.5 text-zinc-300 hover:text-zinc-200">
							<span className="sr-only">Logo</span>
							<h1 className="font-[Pacifico] text-sm md:text-base">Guilherme Morone</h1>
						</Link>
					</div>
					<div className="flex xl:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
							onClick={handleOpenMobileMenu}
						>
							<span className="sr-only">Open menu</span>
							<Bars3Icon className="w-auto h-8 sm:10" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden xl:flex xl:gap-x-12">
						{navigation.map(({ name, href, Icon, useLink }, index) => {
							const isCurrent = useLink && pathname === href;

							return (
								<Fragment key={`navbar-item-${name}-${index}`}>
									{!useLink && <hr className="-mx-6 w-[1.5px] h-auto border-t-0 bg-zinc-400" />}
									{useLink ? (
										<Link
											to={href}
											className={classNames(
												isCurrent
													? 'text-teal-400 hover:cursor-default relative'
													: 'text-zinc-100 hover:underline hover:underline-offset-2 hover:cursor-pointer',
												'flex gap-x-1.5 items-center text-sm font-semibold leading-6'
											)}
										>
											<Icon className="size-4" />
											<span>{name}</span>
											{isCurrent && (
												<span className="absolute h-px inset-x-1 -bottom-px bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0"></span>
											)}
										</Link>
									) : (
										<a
											href={href}
											className="flex gap-x-1.5 items-center text-sm font-semibold leading-6 text-zinc-100 hover:underline hover:underline-offset-2"
										>
											<Icon className="size-4" />
											<span>{name}</span>
										</a>
									)}
								</Fragment>
							);
						})}
					</div>
				</div>
			</nav>
			<Dialog as="div" className="xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gradient-to-b from-zinc-500 to-zinc-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="flex items-center justify-between">
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-zinc-300 hover:text-zinc-400"
							onClick={handleCloseMobileMenu}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="w-6 h-6" aria-hidden="true" />
						</button>
					</div>
					<div className="flow-root mt-6">
						<div className="-my-6">
							<div className="py-6 space-y-2">
								{navigation.map(({ name, href, Icon, useLink }, index) => {
									const isCurrent = useLink && pathname === href;

									return (
										<Fragment key={`navbar-menu-item-${name}-${index}`}>
											{useLink ? (
												<Link
													to={href}
													onClick={handleCloseMobileMenu}
													className={classNames(
														isCurrent
															? 'bg-zinc-800 hover:cursor-default'
															: 'hover:bg-zinc-800 hover:cursor-pointer',
														'-mx-3 flex items-center gap-x-1.5 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100'
													)}
												>
													<Icon className="size-4" />
													<span>{name}</span>
												</Link>
											) : (
												<>
													<hr className="hidden w-auto h-px -mx-6 border-t-0 md:block bg-zinc-400" />
													<a
														href={href}
														onClick={handleCloseMobileMenu}
														className="hidden -mx-3 md:flex items-center gap-x-1.5 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-800"
													>
														<Icon className="size-4" />
														<span>{name}</span>
													</a>
												</>
											)}
										</Fragment>
									);
								})}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
