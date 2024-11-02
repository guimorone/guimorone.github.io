import { GiNotebook } from 'react-icons/gi';
import { GraduationCap, GitHubIcon, ChalkboardUser } from '../../utils/icons';
import { TCC_ATTENA_URL, TCC_PROJECT_URL } from '../../constants/urls';
import type { ActivityType } from '../../@types';

export const title: string = 'Education';
export const subtitle: string =
	'Allow me to present to you my academic journey and experiences throughout my graduation.';

export const experiences: ActivityType[] = [
	{
		title: 'Bachelor in Computer Engineering',
		subtitle: 'Federal University of Pernambuco (UFPE). Feb 2019 - Aug 2024',
		comments: ['Final grade (GPA): 9.02/10.0'],
		Icon: { Element: GraduationCap, background: 'bg-rose-600' },
		links: [
			{ Icon: GiNotebook, label: 'Undergraduate Thesis (PT-BR)', url: TCC_ATTENA_URL },
			{ Icon: GitHubIcon, label: 'Final Project URL', url: TCC_PROJECT_URL },
		],
	},
	{
		title: 'Student Teaching Assistant',
		subtitle: 'Federal University of Pernambuco (UFPE). Jun 2022 - Mar 2024',
		description: [
			'Dedicated Student Teaching Assistant in the field of Software and Systems Engineering.',
			'Provided invaluable support to students in software development and requirements engineering, with a primary goal of crafting top-tier applications of exceptional quality.',
		],
		comments: [
			'Skills/Technologies: ReactJS · Redux · NodeJS · Python · HTML · CSS · Unit Tests · Jest · Supertest · Enzyme · TypeScript · Web Development · Responsive Web Design · Software Development · SASS · Programming · REST APIs · Front-End Development · React Hooks and more.',
		],
		Icon: { Element: ChalkboardUser, background: 'bg-rose-600' },
	},
];
