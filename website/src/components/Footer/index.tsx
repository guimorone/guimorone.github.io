import { InstagramIcon, GitHubIcon, LinkedInIcon } from '../../utils/icons';
import { INSTAGRAM, GITHUB, LINKEDIN } from '../../constants/urls';
import { SOCIAL } from '../../constants/paths';

const navigation = [
	{ name: 'Instagram', href: INSTAGRAM, icon: InstagramIcon },
	{ name: 'GitHub', href: GITHUB, icon: GitHubIcon },
	{ name: 'LinkedIn', href: LINKEDIN, icon: LinkedInIcon },
];

export default function Footer() {
	return (
		<footer className="mt-16 sm:mt-24 -z-20 md:z-auto" aria-labelledby={SOCIAL}>
			<h2 className="sr-only">Social Medias</h2>
			<div id={SOCIAL} className="px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{navigation.map(item => (
						<a
							key={item.name}
							href={item.href}
							target="_blank"
							className="text-gray-200 hover:cursor-pointer hover:text-gray-400"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-center text-xs leading-5 text-gray-200">&copy; Guilherme Morone Araujo</p>
				</div>
			</div>
		</footer>
	);
}
