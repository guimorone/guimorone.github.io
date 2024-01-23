import { SiInstagram } from 'react-icons/si';
import { FaGamepad } from 'react-icons/fa';
import { FaZ, FaChessQueen } from 'react-icons/fa6';
import Page from '../../components/Page';
import { GitHubIcon } from '../../utils/icons';
import {
	TYPEWAR_GAME_URL,
	TYPEWAR_GAME_PROJECT_URL,
	ZTYPE_GAME_URL,
	INSTAGRAM_STATS_PROJECT_URL,
	NQUEENS_PROJECT_URL,
	JOJOSUE_PROJECT_URL,
} from '../../constants/urls';

export default function Projects() {
	const title = 'Projects';
	const subtitle =
		"Allow me to show you some side projects I've worked/been working on throughout my career, whether alone or at college. I would also like to advise that none of them have any interest in profits or any kind of commercial usage.";
	const projects = [
		{
			title: 'Type War',
			subtitle: 'Feb 2023 - Apr 2023',
			description:
				'A 2D game made with other college colleagues. Inspired in the famous ZType game, but in Portuguese.',
			comments: [
				'Skills/Technologies: Game Development · React.js · React Hooks · TailwindCSS · Programming · TypeScript.',
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
			title: 'Instagram Stats',
			subtitle: 'Jan 2023 - Nov 2023',
			description:
				'A Python program to get specific data from Instagram. The project is on hold, but is currently working to get CSV files from followers, followings, and people who do not follow back the account you choose.',
			comments: ['Skills/Technologies: Programming · Python · Instaloader.'],
			links: [{ Icon: GitHubIcon, label: 'Project URL', url: INSTAGRAM_STATS_PROJECT_URL }],
			Icon: { Element: SiInstagram, background: 'bg-[#B733AA]' },
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

	return <Page title={title} subtitle={subtitle} activity={projects} />;
}
