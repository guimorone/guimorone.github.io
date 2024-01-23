import { useState, Fragment, type FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { BiSolidCertification } from 'react-icons/bi';
import { Dialog } from '@headlessui/react';
import { BriefcaseIcon, NewspaperIcon, LinkIcon, AcademicCapIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../utils';
import * as paths from '../../constants/paths';
import IconLogo from '../../assets/images/EuLogo.jpg';

const navigation = [
	{ name: 'About me', href: paths.ABOUT, Icon: NewspaperIcon, useLink: true },
	{ name: 'Academic', href: paths.ACADEMIC, Icon: AcademicCapIcon, useLink: true },
	{ name: 'Jobs', href: paths.JOBS, Icon: BriefcaseIcon, useLink: true },
	{ name: 'Skills', href: paths.SKILLS, Icon: GiSkills, useLink: true },
	{ name: 'Projects', href: paths.PROJECTS, Icon: GrProjects, useLink: true },
	{ name: 'Licenses & Certifications', href: paths.CERTIFICATIONS, Icon: BiSolidCertification, useLink: true },
	{ name: 'Links & Contact', href: `#${paths.LINKS}`, Icon: LinkIcon, useLink: false },
];

interface INavbarProps {
	show: boolean;
}

const Navbar: FC<INavbarProps> = ({ show }) => {
	const { pathname } = useLocation();
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	const handleOpenMobileMenu = (): void => setMobileMenuOpen(true);
	const handleCloseMobileMenu = (): void => setMobileMenuOpen(false);

	return (
		<header
			className={classNames(
				show ? 'visible transition-all duration-500' : 'invisible transition-all duration-500 -translate-y-full',
				'sticky inset-x-0 top-0 z-50 backdrop-blur-md'
			)}
		>
			<nav className="shadow-md" aria-label="Global">
				<div className="flex items-center justify-between max-w-7xl mx-auto w-full h-auto max-h-20 px-4 py-4 sm:py-6 lg:px-8 gap-x-2">
					<div className="flex xl:flex-1">
						<Link to={paths.HOME} className="-m-1.5 p-1.5">
							<span className="sr-only">Guilherme's photo</span>
							<img
								className="h-8 w-auto sm:h-10 md:h-12 lg:h-16 rounded-lg lg:rounded-xl"
								src={IconLogo}
								alt="Guilherme's photo"
							/>
						</Link>
					</div>
					<div className="flex xl:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
							onClick={handleOpenMobileMenu}
						>
							<span className="sr-only">Open menu</span>
							<Bars3Icon className="h-8 w-auto sm:10 lg:h-12" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden xl:flex xl:gap-x-12">
						{navigation.map((item, index) => {
							const isCurrent = item.useLink && pathname === item.href;

							return (
								<Fragment key={`navbar_item_${item.name}_${index}`}>
									{!item.useLink && <hr className="-mx-6 w-[1.5px] h-auto border-t-0 bg-zinc-400" />}
									{item.useLink ? (
										<Link
											to={item.href}
											className={classNames(
												isCurrent
													? 'text-teal-400 hover:cursor-default relative'
													: 'text-zinc-100 hover:underline hover:underline-offset-2 hover:cursor-pointer',
												'flex gap-x-1.5 items-center text-sm font-semibold leading-6 '
											)}
										>
											<item.Icon className="w-4 h-4" />
											<span>{item.name}</span>
											{isCurrent && (
												<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0"></span>
											)}
										</Link>
									) : (
										<a
											href={item.href}
											className="flex gap-x-1.5 items-center text-sm font-semibold leading-6 text-zinc-100 hover:underline hover:underline-offset-2"
										>
											<item.Icon className="w-4 h-4" />
											<span>{item.name}</span>
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
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-zinc-500 to-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="flex items-center justify-between">
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-zinc-300 hover:text-zinc-400"
							onClick={handleCloseMobileMenu}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6">
							<div className="space-y-2 py-6">
								{navigation.map((item, index) => {
									const isCurrent = item.useLink && pathname === item.href;

									return (
										<Fragment key={`navbar_item_${item.name}_${index}`}>
											{item.useLink ? (
												<Link
													to={item.href}
													onClick={handleCloseMobileMenu}
													className={classNames(
														isCurrent ? 'bg-zinc-800 hover:cursor-default' : 'hover:bg-zinc-800 hover:cursor-pointer',
														'-mx-3 flex items-center gap-x-1.5 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100'
													)}
												>
													<item.Icon className="w-4 h-4" />
													<span>{item.name}</span>
												</Link>
											) : (
												<>
													<hr className="hidden md:block -mx-6 h-px w-auto border-t-0 bg-zinc-400" />
													<a
														href={item.href}
														onClick={handleCloseMobileMenu}
														className="hidden -mx-3 md:flex items-center gap-x-1.5 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-100 hover:bg-zinc-800"
													>
														<item.Icon className="w-4 h-4" />
														<span>{item.name}</span>
													</a>
												</>
											)}
										</Fragment>
									);
								})}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default Navbar;
