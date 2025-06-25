import { GiNotebook } from 'react-icons/gi';
import {
	CI_CD,
	CSS,
	GIT,
	GITHUB,
	HTML,
	JEST,
	NODE,
	PYTHON,
	REACT,
	REACT_REDUX,
	TYPESCRIPT,
} from '../../constants/skills';
import { TCC_ATTENA_URL, TCC_PROJECT_URL } from '../../constants/urls';
import { ChalkboardUser, GitHubIcon, GraduationCap } from '../../utils/icons';
import type { ActivityType } from '../../@types';

export const title: string = 'Education';
export const subtitle: string =
	'Allow me to present to you my academic journey and experiences throughout my graduation.';

export const experiences: ActivityType[] = [
	{
		title: 'Bachelor in Computer Engineering',
		subtitle: 'Federal University of Pernambuco (UFPE). Feb 2019 - Aug 2024',
		description: 'Final grade (GPA): 9.02/10.0',
		comments: ['MQF Level 6 (Reference Number: MQRIC 2025/28761)'],
		Icon: { Element: GraduationCap, background: 'bg-rose-600' },
		links: [
			{ Icon: GiNotebook, label: 'Undergraduate Thesis (PT-BR)', url: TCC_ATTENA_URL },
			{ Icon: GitHubIcon, label: 'Final Project URL', url: TCC_PROJECT_URL },
		],
	},
	{
		title: 'Student Teaching Assistant',
		subtitle: 'Federal University of Pernambuco (UFPE). Jun 2022 - Mar 2024',
		description:
			'Provided invaluable support to students in software development and requirements engineering, with a primary goal of crafting top-tier applications of exceptional quality.',
		skills: [CI_CD, CSS, GIT, GITHUB, HTML, JEST, NODE, PYTHON, REACT, REACT_REDUX, TYPESCRIPT],
		Icon: { Element: ChalkboardUser, background: 'bg-rose-600' },
	},
];
