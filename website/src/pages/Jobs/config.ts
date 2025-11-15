import {
	AIRFLOW,
	AWS,
	BASH,
	BITBUCKET,
	CI_CD,
	CONSTRUCT_3,
	CSS,
	DJANGO,
	DOCKER,
	ELASTICSEARCH,
	FASTAPI,
	FLASK,
	GCP,
	GIT,
	GITHUB,
	GO,
	GRAFANA,
	HTML,
	JAVASCRIPT,
	JIRA,
	JUPYTER_NOTEBOOKS,
	KUBERNETES,
	LINUX,
	MONGODB,
	MY_SQL,
	POSTGRESQL,
	POWERSHELL,
	PYTHON,
	REACT,
	REACT_NATIVE,
	REACT_REDUX,
	RPA,
	SQL,
	TAILWIND_CSS,
	TERRAFORM,
	TYPESCRIPT,
	VUE,
} from '@/constants/skills';
import {
	ACASO_LINKEDIN_URL,
	ACASO_URL,
	EDUCANDUS_LINKEDIN_URL,
	EDUCANDUS_URL,
	GPC_GESTAO_LINKEDIN_URL,
	GPC_GESTAO_URL,
	INSPACE_LINKEDIN_URL,
	INSPACE_URL,
	JALAN_LINKEDIN_URL,
	JALAN_URL,
	NEUROTECH_LINKEDIN_URL,
	NEUROTECH_URL,
	ONCASE_LINKEDIN_URL,
	ONCASE_URL,
	SANDBOX_LINKEDIN_URL,
	SANDBOX_URL,
	THOUGHTFUL_LINKEDIN_URL,
	THOUGHTFUL_URL,
} from '@/constants/urls';
import { LinkedInIcon } from '@/utils/icons';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import { FaGamepad } from 'react-icons/fa';
import type { ActivityType } from '@/types';

export const title: string = 'Work Experience';
export const subtitle: string = 'Allow me to show you my jobs with clients and in tech companies.';

const getIcon = (type: 'GAME' | 'MOBILE' | 'SOFTWARE' = 'SOFTWARE'): ActivityType['Icon'] => {
	switch (type) {
		case 'GAME':
			return { Element: FaGamepad, background: 'bg-indigo-600' };
		case 'MOBILE':
			return { Element: DevicePhoneMobileIcon, background: 'bg-blue-600' };
		default:
			return { Element: CodeBracketIcon, background: 'bg-teal-600' };
	}
};

export const experiences: ActivityType[] = [
	{
		title: 'Software Engineer | Full-time',
		subtitle: 'Sandbox Group. September 2025 - Present',
		location: 'Poços de Caldas, Minas Gerais, Brazil · Remote',
		description: [
			'Working at Kids & Family vertical.',
			'Implementing backend functionality using Python, FastAPI, Flask for PlayKids app and SVOD integration.',
		],
		skills: [
			AWS,
			BASH,
			CI_CD,
			DOCKER,
			ELASTICSEARCH,
			FASTAPI,
			FLASK,
			GCP,
			GIT,
			GITHUB,
			JIRA,
			MY_SQL,
			POSTGRESQL,
			PYTHON,
		],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: SANDBOX_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: SANDBOX_LINKEDIN_URL },
		],
		Icon: getIcon(),
	},
	{
		title: 'Forward Deployed Engineer | Contract',
		subtitle: 'Thoughtful AI. August 2025 - Present',
		location: 'Austin, Texas, United States · Remote',
		description: [
			'Implementing RPA functionality using Python.',
			'Automatizing RCM processes for healthcare companies in the United States.',
		],
		skills: [AWS, BASH, BITBUCKET, CI_CD, FASTAPI, GIT, GITHUB, JIRA, PYTHON, RPA],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: THOUGHTFUL_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: THOUGHTFUL_LINKEDIN_URL },
		],
		Icon: getIcon(),
	},
	{
		title: 'Software Engineer | Full-time',
		subtitle: 'Neurotech. April 2024 - August 2025',
		location: 'Recife, Pernambuco, Brazil · Hybrid',
		description: [
			'In general, used skills in data engineering and backend development with Python, FastAPI, Go, Terraform, CI/CD, Docker, Git, Airflow, Bash, and cloud computing on AWS and GCP.',
			'Collaborated with cross-functional teams to achieve project goals.',
			'Implemented backend functionality using Python, FastAPI, and Go.',
			'Used AWS solutions such as Lambda, DynamoDB, EC2, Athena, S3, Step Functions, and more.',
			'Worked on extracting data from different sources (internet, AWS S3, etc) and make it available in a data lake.',
			'Automated ETL pipelines with Apache Airflow.',
			'Used Grafana to visualise data and logs.',
		],
		skills: [
			AIRFLOW,
			AWS,
			BASH,
			CI_CD,
			DOCKER,
			ELASTICSEARCH,
			FASTAPI,
			GCP,
			GIT,
			GITHUB,
			GO,
			GRAFANA,
			JIRA,
			JUPYTER_NOTEBOOKS,
			KUBERNETES,
			LINUX,
			POSTGRESQL,
			PYTHON,
			RPA,
			SQL,
			TERRAFORM,
		],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: NEUROTECH_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: NEUROTECH_LINKEDIN_URL },
		],
		Icon: getIcon(),
	},
	{
		title: 'Full Stack Developer | Full-time',
		subtitle: 'Jalan. April 2024 - May 2024',
		location: 'Recife, Pernambuco, Brazil · Remote',
		description: 'Worked in web apps using Vue.js and Quasar along with Python and AWS Lambda Functions.',
		skills: [AWS, BASH, GIT, JIRA, POWERSHELL, PYTHON, VUE],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: JALAN_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: JALAN_LINKEDIN_URL },
		],
		Icon: getIcon(),
	},
	{
		title: 'Software Engineer | Full-time',
		subtitle: 'Oncase. August 2022 - December 2023',
		location: 'Recife, Pernambuco, Brazil · Remote',
		description: [
			'In general, utilised skills in web development (Flask, Django, React and HTML/CSS), data engineering, CI/CD, Docker, GitHub Actions, and cloud computing (AWS and GCP).',
			'Developed Big Data applications with a focus on high efficiency, scalability, and low cost.',
			'Developed frontend applications using React, React Redux and TypeScript.',
			'Implemented backend functionality using Python frameworks Flask and Django.',
			'Implemented effective CI/CD pipelines for seamless integration and deployment through Docker and GitHub Actions.',
			'Collaborated with cross-functional teams to achieve project goals.',
			'Hosted applications on Google Cloud Platform using Cloud Run and Artifact Registry.',
			'Automated ETL pipelines with Apache Airflow.',
			'Utilised Amazon Web Services for hosting, leveraging services like Amplify, Route53, and Lambda.',
		],
		skills: [
			AIRFLOW,
			AWS,
			BASH,
			CI_CD,
			CSS,
			DJANGO,
			DOCKER,
			FLASK,
			GCP,
			GIT,
			GITHUB,
			HTML,
			JAVASCRIPT,
			JIRA,
			LINUX,
			MONGODB,
			POSTGRESQL,
			PYTHON,
			REACT,
			REACT_REDUX,
			SQL,
			TAILWIND_CSS,
			TYPESCRIPT,
		],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: ONCASE_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: ONCASE_LINKEDIN_URL },
		],
		Icon: getIcon(),
	},
];

export const internships: ActivityType[] = [
	{
		title: 'Full Stack Developer',
		subtitle: 'February 2022 - August 2022',
		location: 'Recife, Pernambuco, Brazil · Remote',
		skills: [AWS, BASH, CSS, FLASK, GIT, GITHUB, HTML, JAVASCRIPT, JIRA, LINUX, MONGODB, PYTHON, REACT, REACT_REDUX],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: ONCASE_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: ONCASE_LINKEDIN_URL },
		],
		Icon: getIcon(),
	},
	{
		title: 'Game Developer',
		subtitle: 'Educandus. May 2020 - December 2020 and June 2021 - October 2021',
		location: 'Recife, Pernambuco, Brazil · Remote',
		description:
			'I have worked as a game developer using Construct 3 software and JavaScript, building educational games for students from preschool to high school levels.',
		skills: [CONSTRUCT_3, CSS, HTML, JAVASCRIPT],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: EDUCANDUS_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: EDUCANDUS_LINKEDIN_URL },
		],
		Icon: getIcon('GAME'),
	},
];

export const freelances: ActivityType[] = [
	{
		title: 'Full Stack Developer',
		subtitle: 'GPC Gestão. September 2024 - October 2024',
		location: 'Recife, Pernambuco, Brazil · Remote',
		description:
			'Built an admin website for viewing, managing and downloading water consumption documents in multiple homes.',
		skills: [CI_CD, GIT, GITHUB, REACT, TAILWIND_CSS, TYPESCRIPT],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: GPC_GESTAO_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: GPC_GESTAO_LINKEDIN_URL },
		],
		Icon: getIcon(),
	},
	{
		title: 'Mobile Developer',
		subtitle: 'aca.so. March 2024',
		location: 'Recife, Pernambuco, Brazil · Remote',
		description: 'Worked in a project (aca.so mobile app) using React Native, React Redux and TypeScript.',
		skills: [GIT, GITHUB, REACT_NATIVE, REACT_REDUX, TYPESCRIPT],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: ACASO_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: ACASO_LINKEDIN_URL },
		],
		Icon: getIcon('MOBILE'),
	},
	{
		title: 'Mobile Developer',
		subtitle: 'InSpace. August 2022 - October 2022',
		location: 'Recife, Pernambuco, Brazil · Remote',
		description: 'Worked with the identification of certain objects from a mobile camera for legal purposes.',
		skills: [GIT, GITHUB, REACT_NATIVE, REACT_REDUX, TYPESCRIPT],
		links: [
			{ Icon: GlobeAltIcon, label: 'Company Website', url: INSPACE_URL },
			{ Icon: LinkedInIcon, label: "Company's LinkedIn", url: INSPACE_LINKEDIN_URL },
		],
		Icon: getIcon('MOBILE'),
	},
];
