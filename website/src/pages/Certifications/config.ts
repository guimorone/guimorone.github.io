import { SiGooglecloud, SiUdemy } from 'react-icons/si';
import { GrCertificate } from 'react-icons/gr';
import {
	GOOGLE_CLOUD_FUNDAMENTALS_COURSE_CERT_URL,
	GOOGLE_CLOUD_IA_COURSE_CERT_URL,
	GOOGLE_CLOUD_INFRA_COURSE_CERT_URL,
	GOOGLE_CLOUD_NETWORKING_COURSE_CERT_URL,
	UDEMY_WEB_DEV_COURSE_CERT_URL,
	UDEMY_FLUTTER_COURSE_CERT_URL,
	UDEMY_CYBER_SECURITY_COURSE_1_URL,
	UDEMY_GRAPHQL_COURSE_URL,
} from '../../constants/urls';
import {
	CSS,
	CYBER_SECURITY,
	DART,
	FLUTTER,
	GCP,
	GIT,
	GITHUB,
	GRAPHQL,
	HTML,
	JAVASCRIPT,
	JQUERY,
	LINUX,
	MONGODB,
	NODE,
	REACT,
	SQL,
	TYPESCRIPT,
} from '../../constants/skills';
import type { ActivityType } from '../../@types';

export const title: string = 'Courses & Certifications';
export const subtitle: string = 'Allow me to showcase my certifications on different top-rated online platforms.';

export const coursesAndCertifications: ActivityType[] = [
	{
		title: 'GraphQL by Example',
		subtitle: 'Udemy. Nov 2024',
		skills: [GIT, GITHUB, GRAPHQL, NODE, REACT, JAVASCRIPT, TYPESCRIPT],
		links: [
			{
				Icon: GrCertificate,
				color: 'text-teal-300 hover:text-teal-200',
				label: 'Credential URL',
				url: UDEMY_GRAPHQL_COURSE_URL,
			},
		],
		Icon: { Element: SiUdemy, background: 'bg-[#A632F1]' },
	},
	{
		title: 'The Complete Cyber Security Course - Volume 1: Hackers Exposed!',
		subtitle: 'Udemy. Nov 2024',
		skills: [CYBER_SECURITY, LINUX],
		links: [
			{
				Icon: GrCertificate,
				color: 'text-teal-300 hover:text-teal-200',
				label: 'Credential URL',
				url: UDEMY_CYBER_SECURITY_COURSE_1_URL,
			},
		],
		Icon: { Element: SiUdemy, background: 'bg-[#A632F1]' },
	},
	{
		title: 'The Complete Flutter Development Bootcamp with Dart',
		subtitle: 'Udemy. Apr 2024',
		skills: [DART, FLUTTER, GIT, GITHUB],
		links: [
			{
				Icon: GrCertificate,
				color: 'text-teal-300 hover:text-teal-200',
				label: 'Credential URL',
				url: UDEMY_FLUTTER_COURSE_CERT_URL,
			},
		],
		Icon: { Element: SiUdemy, background: 'bg-[#A632F1]' },
	},
	{
		title: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud - Locales',
		subtitle: 'Google Cloud Skills Boost. Mar 2023',
		description: 'Credential ID: 3311200',
		skills: [GCP],
		links: [
			{
				Icon: GrCertificate,
				color: 'text-teal-300 hover:text-teal-200',
				label: 'Credential URL',
				url: GOOGLE_CLOUD_IA_COURSE_CERT_URL,
			},
		],
		Icon: { Element: SiGooglecloud, background: 'bg-blue-600' },
	},
	{
		title: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud - Locales',
		subtitle: 'Google Cloud Skills Boost. Mar 2023',
		description: 'Credential ID: 3303084',
		skills: [GCP],
		links: [
			{
				Icon: GrCertificate,
				color: 'text-teal-300 hover:text-teal-200',
				label: 'Credential URL',
				url: GOOGLE_CLOUD_INFRA_COURSE_CERT_URL,
			},
		],
		Icon: { Element: SiGooglecloud, background: 'bg-blue-600' },
	},
	{
		title: 'Google Cloud Computing Foundations: Networking & Security - Locales',
		subtitle: 'Google Cloud Skills Boost. Mar 2023',
		description: 'Credential ID: 3305980',
		skills: [CYBER_SECURITY, GCP],
		links: [
			{
				Icon: GrCertificate,
				color: 'text-teal-300 hover:text-teal-200',
				label: 'Credential URL',
				url: GOOGLE_CLOUD_NETWORKING_COURSE_CERT_URL,
			},
		],
		Icon: { Element: SiGooglecloud, background: 'bg-blue-600' },
	},
	{
		title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals - Locales',
		subtitle: 'Google Cloud Skills Boost. Mar 2023',
		description: 'Credential ID: 3302433',
		skills: [GCP],
		links: [
			{
				Icon: GrCertificate,
				color: 'text-teal-300 hover:text-teal-200',
				label: 'Credential URL',
				url: GOOGLE_CLOUD_FUNDAMENTALS_COURSE_CERT_URL,
			},
		],
		Icon: { Element: SiGooglecloud, background: 'bg-blue-600' },
	},
	{
		title: 'The Complete 2020 Web Development Bootcamp',
		subtitle: 'Udemy. Apr 2020',
		skills: [CSS, GIT, GITHUB, HTML, JAVASCRIPT, JQUERY, MONGODB, NODE, REACT, SQL, TYPESCRIPT],
		links: [
			{
				Icon: GrCertificate,
				color: 'text-teal-300 hover:text-teal-200',
				label: 'Credential URL',
				url: UDEMY_WEB_DEV_COURSE_CERT_URL,
			},
		],
		Icon: { Element: SiUdemy, background: 'bg-[#A632F1]' },
	},
];
