import { Tooltip } from 'flowbite-react';
import { navigation } from './config';

export default function Footer() {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className="clear-both w-full mx-auto mt-auto sm:z-auto max-w-7xl">
			<h2 className="sr-only">Social Medias</h2>
			<section className="px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{navigation.map(({ name, href, target, Icon }, index) => (
						<a
							key={`footer-item-${name}-${index}`}
							href={href}
							target={target}
							className="text-zinc-200 hover:cursor-pointer hover:text-zinc-400"
						>
							<Tooltip content={name} animation="duration-150">
								<span className="sr-only">{name}</span>
								<Icon className="w-6 h-6" aria-hidden="true" />
							</Tooltip>
						</a>
					))}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-xs leading-5 text-center text-zinc-200">&copy; {currentYear} Guilherme Morone Araujo</p>
				</div>
			</section>
		</footer>
	);
}
