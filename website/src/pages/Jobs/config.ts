import { FaGamepad } from 'react-icons/fa';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import { LinkedInIcon } from '../../utils/icons';
import {
	ONCASE_URL,
	ONCASE_LINKEDIN_URL,
	INSPACE_URL,
	INSPACE_LINKEDIN_URL,
	EDUCANDUS_URL,
	EDUCANDUS_LINKEDIN_URL,
	ACASO_URL,
	ACASO_LINKEDIN_URL,
	NEUROTECH_URL,
	NEUROTECH_LINKEDIN_URL,
	JALAN_URL,
	JALAN_LINKEDIN_URL,
	GPC_GESTAO_URL,
	GPC_GESTAO_LINKEDIN_URL,
} from '../../constants/urls';
import type { ActivityType } from '../../@types';

export const title: string = 'Work Experience';
export const subtitle: string = 'Allow me to show you my jobs with clients and in tech companies.';

export const experiences: ActivityType[] = [
	{
		title: 'Software Engineer | Full-time',
		subtitle: 'Neurotech. Apr 2024 - Present',
		description: [
			'In general, using skills in software, data engineering and backend development with Python, FastAPI, Terraform, Git, Airflow, Bash and cloud computing on AWS.',
			'Collaborate with cross-functional teams to achieve project goals.',
			'Ensure high-quality, scalable application development.',
			'Using AWS solutions such as Lambda, DynamoDB, EC2, Athena, S3, Step Functions and more.',
			'Extract data from different sources and make it available for many users in a data lake.',
		],
		comments: ['Skills/Technologies: Python · FastAPI · AWS · Terraform · Docker · Airflow · Shell.'],
		links: [
			{ Icon: GlobeAltIcon, label: 'Website', url: NEUROTECH_URL },
			{ Icon: LinkedInIcon, label: 'LinkedIn', url: NEUROTECH_LINKEDIN_URL },
		],
		Icon: { Element: CodeBracketIcon, background: 'bg-indigo-600' },
	},
	{
		title: 'Software Engineer | Full-time',
		subtitle: 'Jalan. Apr 2024 - May 2024',
		description:
			'Worked as a Full Stack developer using Vue.js and Quasar along with Python and Lambda Functions (AWS).',
		comments: ['Skills/Technologies: Vue · Python · AWS · Shell.'],
		links: [
			{ Icon: GlobeAltIcon, label: 'Website', url: JALAN_URL },
			{ Icon: LinkedInIcon, label: 'LinkedIn', url: JALAN_LINKEDIN_URL },
		],
		Icon: { Element: CodeBracketIcon, background: 'bg-indigo-600' },
	},
	{
		title: 'Software Engineer | Full-time',
		subtitle: 'Oncase. Feb 2022 - Dec 2023 (Feb 2022 - Aug 2022 as an intern)',
		description: [
			'Developed Big Data applications with a focus on high efficiency, scalability, and low cost.',
			'Developed frontend applications using React (JavaScript, TypeScript and HTML/CSS) and Redux.',
			'Implemented backend functionality using Python frameworks Flask and Django.',
			'Implemented effective CI/CD pipelines for seamless integration and deployment through Docker and GitHub Actions.',
			'In general, utilized skills in web development (Django, React and HTML/CSS), data engineering, CI/CD, Docker, GitHub Actions, and cloud computing.',
			'Collaborated with cross-functional teams to achieve project goals.',
			'Enhanced customer relationships through the delivery of top-notch solutions.',
			'Ensured high-quality and scalable application development.',
			'Hosted applications on Google Cloud Platform using Cloud Run and Artifact Registry.',
			'Utilized Amazon Web Services for hosting, leveraging services like Amplify, Route53, and Lambda.',
		],
		comments: [
			'Skills/Technologies: Django · React.js · Tailwind CSS · TypeScript · Continuous Integration and Continuous Delivery (CI/CD) · Docker · Cloud Computing · Git · Object-Relational Mapping (ORM) · Web Services API · Responsive Web Design · Python · Software Development · SASS · Databases · Amazon Web Services (AWS) · Programming · Extract, Transform, Load (ETL) · Google Cloud Platform (GCP) · REST APIs · Flask · Redux.js · React Hooks · Linux · Big Data · JavaScript · Amazon Web Services · DevOps · HTML5 · CSS · SQL · MongoDB · Shell and more.',
		],
		links: [
			{ Icon: GlobeAltIcon, label: 'Website', url: ONCASE_URL },
			{ Icon: LinkedInIcon, label: 'LinkedIn', url: ONCASE_LINKEDIN_URL },
		],
		Icon: { Element: CodeBracketIcon, background: 'bg-indigo-600' },
	},

	{
		title: 'Game Developer | Internship',
		subtitle: 'Educandus. May 2020 - Dec 2020 and Jun 2021 - Oct 2021',
		description:
			'I have worked as a game developer using Construct 3 software and JavaScript, building educational games for students from preschool to high school levels.',
		comments: [
			'Skills/Technologies: Construct 3 · Object-Oriented Programming (OOP) · Programming · JavaScript · HTML5 · CSS · Web Development · Game Development.',
		],
		links: [
			{ Icon: GlobeAltIcon, label: 'Website', url: EDUCANDUS_URL },
			{ Icon: LinkedInIcon, label: 'LinkedIn', url: EDUCANDUS_LINKEDIN_URL },
		],
		Icon: { Element: FaGamepad, background: 'bg-indigo-600' },
	},
];

export const freelances: ActivityType[] = [
	{
		title: 'Full Stack Developer',
		subtitle: 'GPC Gestão. Sep 2024 - Oct 2024',
		description: 'Built an admin website using React with TypeScript and Tailwind CSS.',
		comments: [
			'Skills/Technologies: TypeScript · Software Development · React.js · React Hooks · Tailwind CSS · Continuous Integration and Continuous Delivery (CI/CD)',
		],
		links: [
			{ Icon: GlobeAltIcon, label: 'Website', url: GPC_GESTAO_URL },
			{ Icon: LinkedInIcon, label: 'LinkedIn', url: GPC_GESTAO_LINKEDIN_URL },
		],
		Icon: { Element: CodeBracketIcon, background: 'bg-indigo-600' },
	},
	{
		title: 'Mobile Engineer',
		subtitle: 'aca.so. Mar 2024',
		description: 'Worked as a Mobile Engineer in a freelance project (aca.so mobile app) using React Native.',
		comments: ['Skills/Technologies: TypeScript · React Native · React Hooks.'],
		links: [
			{ Icon: GlobeAltIcon, label: 'Website', url: ACASO_URL },
			{ Icon: LinkedInIcon, label: 'LinkedIn', url: ACASO_LINKEDIN_URL },
		],
		Icon: { Element: DevicePhoneMobileIcon, background: 'bg-indigo-600' },
	},
	{
		title: 'Mobile Engineer',
		subtitle: 'InSpace. Aug 2022 - Oct 2022',
		description:
			'I have worked with the identification of objects (censored specificity) from a mobile camera for legal purposes.',
		comments: ['Skills/Technologies: TypeScript · Software Development · Redux.js · React Native · React Hooks.'],
		links: [
			{ Icon: GlobeAltIcon, label: 'Website', url: INSPACE_URL },
			{ Icon: LinkedInIcon, label: 'LinkedIn', url: INSPACE_LINKEDIN_URL },
		],
		Icon: { Element: DevicePhoneMobileIcon, background: 'bg-indigo-600' },
	},
];
