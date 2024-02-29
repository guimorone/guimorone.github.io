import { Tooltip } from 'flowbite-react';
import { CodeBracketIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { InstagramIcon, GitHubIcon, LinkedInIcon } from '../../utils/icons';
import { INSTAGRAM, GITHUB, LINKEDIN, WEBSITE_CODE_URL, MAILTO_URL } from '../../constants/urls';

const navigation = [
	{ name: 'Instagram', href: INSTAGRAM, target: '_blank', icon: InstagramIcon },
	{ name: 'GitHub', href: GITHUB, target: '_blank', icon: GitHubIcon },
	{ name: 'LinkedIn', href: LINKEDIN, target: '_blank', icon: LinkedInIcon },
	{ name: 'E-mail', href: MAILTO_URL, icon: EnvelopeIcon },
	{ name: 'Source code', href: WEBSITE_CODE_URL, target: '_blank', icon: CodeBracketIcon },
];

export default function Footer() {
	return (
		<footer className="npmclear-both w-full sm:z-auto mt-auto max-w-7xl mx-auto">
			<h2 className="sr-only">Social Medias</h2>
			<section className="px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{navigation.map((item, index) => (
						<a
							key={`footer_item_${item.name}_${index}`}
							href={item.href}
							target={item.target}
							className="text-zinc-200 hover:cursor-pointer hover:text-zinc-400"
						>
							<Tooltip content={item.name} animation="duration-150">
								<span className="sr-only">{item.name}</span>
								<item.icon className="h-6 w-6" aria-hidden="true" />
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
