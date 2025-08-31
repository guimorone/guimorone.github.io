import {
	BASH,
	C,
	CI_CD,
	DJANGO,
	DOCKER,
	GIT,
	GITHUB,
	LINUX,
	POSTGRESQL,
	PYTHON,
	REACT,
	REACT_REDUX,
	TAILWIND_CSS,
	TYPESCRIPT,
} from '@/constants/skills';
import {
	INSTAGRAM_STATS_PROJECT_URL,
	JOJOSUE_PROJECT_URL,
	RANDOM_PASSWORD_GENERATOR_PROJECT_URL,
	TYPEWAR_GAME_PROJECT_URL,
	TYPEWAR_GAME_URL,
	URL_SHORTENER_PROJECT_URL,
	ZTYPE_GAME_URL,
} from '@/constants/urls';
import { GitHubIcon } from '@/utils/icons';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import { FaLink, FaZ } from 'react-icons/fa6';
import { FaGamepad } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { SiInstagram } from 'react-icons/si';
import type { ActivityType } from '@/types';

export const title: string = 'Projects';
export const subtitle: string =
	"Allow me to show you some side projects I've worked/been working on throughout my career, whether alone, at college or with other colleagues. I would also like to advise that none of them have any interest in profits or any kind of commercial usage.";

export const projects: ActivityType[] = [
	{
		title: 'Instagram Stats',
		subtitle: 'Jan 2023 - Nov 2023 and Jun 2024',
		description: [
			'A Python program to get specific data from Instagram.',
			'The main idea is to get CSV files from followers, followings, and people who do not follow back the account you choose.',
		],
		skills: [GIT, GITHUB, PYTHON],
		links: [{ Icon: GitHubIcon, label: 'Project URL', url: INSTAGRAM_STATS_PROJECT_URL }],
		Icon: { Element: SiInstagram, background: 'bg-[#B733AA]' },
	},
	{
		title: 'URL Shortener',
		subtitle: 'April 2024',
		description: 'Program to generate a shortened URL with a focus on using server-side rendering.',
		skills: [DJANGO, GIT, GITHUB, POSTGRESQL, PYTHON],
		links: [
			{
				Icon: GitHubIcon,
				label: 'Project URL',
				url: URL_SHORTENER_PROJECT_URL,
			},
		],
		Icon: { Element: FaLink, background: 'bg-blue-500' },
	},
	{
		title: 'Random Password Generator',
		subtitle: 'Feb 2024',
		description: 'Program to generate a secure random password.',
		skills: [GIT, GITHUB, PYTHON],
		links: [
			{
				Icon: GitHubIcon,
				label: 'Project URL',
				url: RANDOM_PASSWORD_GENERATOR_PROJECT_URL,
			},
		],
		Icon: { Element: RiLockPasswordLine, background: 'bg-red-500' },
	},
	{
		title: 'Cheque Fácil',
		subtitle: 'Sep 2023 - Dec 2023',
		description: [
			'Made a website with 3 more colleagues to an external customer.',
			'The main purpose is to identify bank check fields easily, so the user does not have to type them manually.',
			"The bank check's OCR is done by our customer's API, we did not implement it, just the website.",
			'It also offers API Integration, history download, payments and other features.',
		],
		comments: ['Since it is a private project, I cannot share the Repository URL.'],
		skills: [
			BASH,
			CI_CD,
			DJANGO,
			DOCKER,
			GIT,
			GITHUB,
			LINUX,
			POSTGRESQL,
			PYTHON,
			REACT,
			REACT_REDUX,
			TAILWIND_CSS,
			TYPESCRIPT,
		],
		Icon: { Element: BanknotesIcon },
	},
	{
		title: 'Type War',
		subtitle: 'Feb 2023 - Apr 2023',
		description: 'A 2D game made with other college colleagues. Inspired in the famous ZType game, but in Portuguese.',
		skills: [GIT, GITHUB, REACT, TAILWIND_CSS, TYPESCRIPT],
		links: [
			{
				Icon: FaGamepad,
				label: 'Game URL',
				url: TYPEWAR_GAME_URL,
			},
			{
				Icon: GitHubIcon,
				label: 'Project URL',
				url: TYPEWAR_GAME_PROJECT_URL,
			},
			{
				Icon: FaZ,
				label: 'ZType Game URL',
				url: ZTYPE_GAME_URL,
			},
		],
		Icon: { Element: FaGamepad, background: 'bg-[#0A344D]' },
	},
	{
		title: 'Jojosué',
		subtitle: 'May 2019 - Jun 2019',
		description:
			'A multiplayer game made with other college colleagues. The game story is about a postman that have to deliver some packages in the neighbourhood, but he will face issues and other players in his way.',
		skills: [BASH, C, GIT, GITHUB, LINUX],
		links: [{ Icon: GitHubIcon, label: 'Project URL', url: JOJOSUE_PROJECT_URL }],
		Icon: { Element: FaGamepad, background: 'bg-[#B58CD6]' },
	},
];
