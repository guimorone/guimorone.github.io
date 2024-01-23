import { FaGamepad, FaZ } from 'react-icons/fa6';
import Page from '../../components/Page';
import { GitHubIcon } from '../../utils/icons';
import { TYPEWAR_GAME_URL, TYPEWAR_GAME_PROJECT_URL, ZTYPE_GAME_URL } from '../../constants/urls';

export default function Projects() {
	const title = 'Projects';
	const subtitle = '';
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
	];

	return <Page title={title} subtitle={subtitle} activity={projects} />;
}
