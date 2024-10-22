import { SiGooglecloud, SiUdemy } from 'react-icons/si';
import { GrCertificate } from 'react-icons/gr';
import {
	GOOGLE_CLOUD_FUNDAMENTALS_COURSE_CERT_URL,
	GOOGLE_CLOUD_IA_COURSE_CERT_URL,
	GOOGLE_CLOUD_INFRA_COURSE_CERT_URL,
	GOOGLE_CLOUD_NETWORKING_COURSE_CERT_URL,
	UDEMY_WEB_DEV_COURSE_CERT_URL,
	UDEMY_FLUTTER_COURSE_CERT_URL,
} from '../../constants/urls';
import type { ActivityType } from '../../components/Feed';

export const title: string = 'Licenses & Certifications';
export const subtitle: string = 'Allow me to showcase my certifications on different top-rated online platforms.';

export const licenses: ActivityType[] = [
	{
		title: 'The Complete Flutter Development Bootcamp with Dart',
		subtitle: 'Udemy. Apr 2024',
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
		title: 'Google Cloud Computing Foundations: Networking',
		subtitle: 'Google Cloud Skills Boost. Mar 2023',
		description: 'Credential ID: 3305980',
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
