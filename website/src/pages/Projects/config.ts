import { SiInstagram } from 'react-icons/si';
import { FaGamepad } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaZ, FaChessQueen, FaLink } from 'react-icons/fa6';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import { GitHubIcon } from '../../utils/icons';
import {
	RANDOM_PASSWORD_GENERATOR_PROJECT_URL,
	TYPEWAR_GAME_URL,
	TYPEWAR_GAME_PROJECT_URL,
	ZTYPE_GAME_URL,
	INSTAGRAM_STATS_PROJECT_URL,
	NQUEENS_PROJECT_URL,
	JOJOSUE_PROJECT_URL,
	URL_SHORTENER_PROJECT_URL,
} from '../../constants/urls';
import type { ActivityType } from '../../@types';

export const title: string = 'Projects';
export const subtitle: string =
	"Allow me to show you some side projects I've worked/been working on throughout my career, whether alone or at college. I would also like to advise that none of them have any interest in profits or any kind of commercial usage.";

export const projects: ActivityType[] = [
	{
		title: 'Instagram Stats',
		subtitle: 'Jan 2023 - Nov 2023 and Jun 2024',
		description:
			'A Python program to get specific data from Instagram. The project is on hold, but is currently working to get CSV files from followers, followings, and people who do not follow back the account you choose.',
		comments: ['Skills/Technologies: Programming · Python · Instaloader.'],
		links: [{ Icon: GitHubIcon, label: 'Project URL', url: INSTAGRAM_STATS_PROJECT_URL }],
		Icon: { Element: SiInstagram, background: 'bg-[#B733AA]' },
	},
	{
		title: 'URL Shortener',
		subtitle: 'April 2024',
		description: 'Program to generate a shortened URL with a focus on using server-side rendering.',
		comments: ['Skills/Technologies: Python · Django.'],
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
		comments: ['Skills/Technologies: Python.'],
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
			'The main purpose is to identify bank check fields easily, so you do not have to type manually.',
			"The bank check OCR is based on our customer's API, we did not implement it, just the website.",
			'It also offers API Integration, history download, payments and other features.',
			'Developed using React, TypeScript, Tailwind CSS and Django (Python).',
		],
		comments: [
			'Skills/Technologies: Django · TypeScript · Software Development · React.js · Redux.js · React Hooks · Tailwind CSS · Continuous Integration and Continuous Delivery (CI/CD) · Docker · Linux · Shell.',
			'Since is a private project, I can not share the Repository URL.',
		],
		Icon: { Element: BanknotesIcon },
	},
	{
		title: 'Type War',
		subtitle: 'Feb 2023 - Apr 2023',
		description:
			'A 2D game made with other college colleagues. Inspired in the famous ZType game, but in Portuguese.',
		comments: [
			'Skills/Technologies: Game Development · React.js · React Hooks · Tailwind CSS · Programming · TypeScript.',
		],
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
		title: 'N-Queens Solver',
		subtitle: 'Nov 2019',
		description: 'A C++ program to solve the N-Queens problem.',
		comments: ['Skills/Technologies: Programming · C++.'],
		links: [{ Icon: GitHubIcon, label: 'Project URL', url: NQUEENS_PROJECT_URL }],
		Icon: { Element: FaChessQueen },
	},
	{
		title: 'Jojosué',
		subtitle: 'May 2019 - Jun 2019',
		description:
			'A multiplayer game made with other college colleagues. The game story is about a postman that have to deliver some packages in the neighbourhood, but he will face issues and other players in his way.',
		comments: ['Skills/Technologies: Game Development · C · Programming · Allegro · Linux.'],
		links: [{ Icon: GitHubIcon, label: 'Project URL', url: JOJOSUE_PROJECT_URL }],
		Icon: { Element: FaGamepad, background: 'bg-[#B58CD6]' },
	},
];
