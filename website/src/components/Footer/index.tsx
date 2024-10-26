import { Tooltip } from 'flowbite-react';
import { navigation } from './config';

export default function Footer() {
	return (
		<footer className="clear-both w-full sm:z-auto mt-auto max-w-7xl mx-auto">
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
								<Icon className="h-6 w-6" aria-hidden="true" />
							</Tooltip>
						</a>
					))}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-center text-xs leading-5 text-zinc-200">&copy; Guilherme Morone Araujo</p>
				</div>
			</section>
		</footer>
	);
}
