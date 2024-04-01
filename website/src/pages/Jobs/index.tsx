import { FaGamepad } from 'react-icons/fa';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import Page from '../../components/Page';
import { LinkedInIcon } from '../../utils/icons';
import {
	ONCASE_URL,
	ONCASE_LINKEDIN_URL,
	INSPACE_URL,
	INSPACE_LINKEDIN_URL,
	CHEQUEFACIL_URL,
	EDUCANDUS_URL,
	EDUCANDUS_LINKEDIN_URL,
	ACASO_URL,
	ACASO_LINKEDIN_URL,
	JALAN_URL,
	JALAN_LINKEDIN_URL,
} from '../../constants/urls';

export default function Jobs() {
	const title = 'Experience';
	const subtitle = 'Allow me to show you my jobs with clients and in tech companies.';

	const experiences = [
		{
			title: 'Software Engineer | Full-time',
			subtitle: 'Jalan. Apr 2024 - Present',
			description: '',
			comments: ['Skills/Technologies: Vue · Python · AWS.'],
			links: [
				{ Icon: GlobeAltIcon, label: 'Website', url: JALAN_URL },
				{ Icon: LinkedInIcon, label: 'LinkedIn', url: JALAN_LINKEDIN_URL },
			],
			Icon: { Element: CodeBracketIcon, background: 'bg-indigo-600' },
		},
		{
			title: 'Mobile Engineer | Freelance',
			subtitle: 'aca.so. Mar 2024',
			description: 'Worked as a Mobile Engineer in a Freelancer project (aca.so mobile app) using React Native.',
			comments: ['Skills/Technologies: TypeScript · React Native · React Hooks.'],
			links: [
				{ Icon: GlobeAltIcon, label: 'Website', url: ACASO_URL },
				{ Icon: LinkedInIcon, label: 'LinkedIn', url: ACASO_LINKEDIN_URL },
			],
			Icon: { Element: DevicePhoneMobileIcon, background: 'bg-indigo-600' },
		},
		{
			title: 'Software Engineer | Full-time',
			subtitle: 'Oncase. Feb 2022 - Dec 2023 (Feb 2022 - Aug 2022 as an intern)',
			description:
				'I developed Big Data applications that demanded high efficiency and scalability, as well as low cost.',
			comments: [
				'Skills/Technologies: Django · React.js · TailwindCSS · TypeScript · Continuous Integration and Continuous Delivery (CI/CD) · Docker · Cloud Computing · Git · Object-Relational Mapping (ORM) · Web Services API · Responsive Web Design · Python · Software Development · SASS · Databases · Amazon Web Services (AWS) · Programming · Extract, Transform, Load (ETL) · Google Cloud Platform (GCP) · REST APIs · Flask · Redux.js · React Hooks · Linux · Big Data · JavaScript · Amazon Web Services · DevOps · HTML5 · CSS · SQL · MongoDB and more.',
			],
			links: [
				{ Icon: GlobeAltIcon, label: 'Website', url: ONCASE_URL },
				{ Icon: LinkedInIcon, label: 'LinkedIn', url: ONCASE_LINKEDIN_URL },
			],
			Icon: { Element: CodeBracketIcon, background: 'bg-indigo-600' },
		},
		{
			title: 'FullStack Developer | Freelance',
			subtitle: 'Cheque Fácil. Sep 2023 - Dec 2023',
			description:
				'Website made with 3 more colleagues. The main purpose is to identify bank check fields easily, so you do not have to type manually. It also offers API Integration, history download and other features.',
			comments: [
				'Skills/Technologies: Django · TypeScript · Software Development · React.js · Redux.js · React Hooks · TailwindCSS · Continuous Integration and Continuous Delivery (CI/CD) · Docker · Linux.',
			],
			links: [{ Icon: GlobeAltIcon, label: 'Website', url: CHEQUEFACIL_URL }],
			Icon: { Element: CodeBracketIcon, background: 'bg-indigo-600' },
		},
		{
			title: 'Mobile Engineer | Freelance',
			subtitle: 'InSpace. Aug 2022 - Oct 2022',
			description: 'Identification of objects (censored specificity) from a mobile camera for legal purposes.',
			comments: ['Skills/Technologies: TypeScript · Software Development · Redux.js · React Native · React Hooks.'],
			links: [
				{ Icon: GlobeAltIcon, label: 'Website', url: INSPACE_URL },
				{ Icon: LinkedInIcon, label: 'LinkedIn', url: INSPACE_LINKEDIN_URL },
			],
			Icon: { Element: DevicePhoneMobileIcon, background: 'bg-indigo-600' },
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

	return <Page title={title} subtitle={subtitle} activity={experiences} />;
}
