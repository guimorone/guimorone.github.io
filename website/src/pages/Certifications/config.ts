import {
	CSS,
	CYBER_SECURITY,
	DART,
	FLUTTER,
	GCP,
	GIT,
	GITHUB,
	GO,
	GRAPHQL,
	HTML,
	JAVASCRIPT,
	JQUERY,
	LINUX,
	MONGODB,
	NODE,
	PYTHON,
	REACT,
	RPA,
	SQL,
	TYPESCRIPT,
} from '@/constants/skills';
import {
	GOOGLE_CLOUD_FUNDAMENTALS_COURSE_CERT_URL,
	GOOGLE_CLOUD_IA_COURSE_CERT_URL,
	GOOGLE_CLOUD_INFRA_COURSE_CERT_URL,
	GOOGLE_CLOUD_NETWORKING_COURSE_CERT_URL,
	ROBOCORP_RPA_LEVEL_1_CERT_URL,
	ROBOCORP_RPA_LEVEL_2_CERT_URL,
	ROBOCORP_RPA_LEVEL_3_CERT_URL,
	UDEMY_CYBER_SECURITY_COURSE_1_URL,
	UDEMY_FLUTTER_COURSE_CERT_URL,
	UDEMY_GO_COURSE_URL,
	UDEMY_GRAPHQL_COURSE_URL,
	UDEMY_WEB_DEV_COURSE_CERT_URL,
} from '@/constants/urls';
import { RobocorpLogo } from '@/utils/icons';
import { GrCertificate } from 'react-icons/gr';
import { SiGooglecloud, SiUdemy } from 'react-icons/si';
import type { ActivityType } from '@/types';

export const title: string = 'Courses & Certifications';
export const subtitle: string = 'Allow me to showcase my certifications on different top-rated online platforms.';

const GOOGLE_CLOUD_ICON = { Element: SiGooglecloud, background: 'bg-blue-600' };
const ROBOCORP_ICON = { Element: RobocorpLogo, background: 'bg-[#7F74F9]' };
const UDEMY_ICON = { Element: SiUdemy, background: 'bg-[#A632F1]' };

const getLinks = (url: string): ActivityType['links'] => [
	{
		Icon: GrCertificate,
		color: 'text-teal-300 hover:text-teal-200',
		label: 'Credential URL',
		url,
	},
];

export const coursesAndCertifications: ActivityType[] = [
	{
		title: 'Automation Certification Level III: Work data management',
		subtitle: 'Robocorp. August 2025',
		description: 'Credential ID: 36188913-3637-46af-a456-789aa21677d5',
		skills: [PYTHON, RPA],
		links: getLinks(ROBOCORP_RPA_LEVEL_3_CERT_URL),
		Icon: ROBOCORP_ICON,
	},
	{
		title: 'Automation Certification Level II: Build a robot',
		subtitle: 'Robocorp. August 2025',
		description: 'Credential ID: d757eb92-d9a9-4ab0-a8c3-854928917e03',
		skills: [PYTHON, RPA],
		links: getLinks(ROBOCORP_RPA_LEVEL_2_CERT_URL),
		Icon: ROBOCORP_ICON,
	},
	{
		title: "Automation Certification Level I: Beginner's course",
		subtitle: 'Robocorp. August 2025',
		description: 'Credential ID: 3411e1e3-f7b9-4a2d-b561-6caaced261fd',
		skills: [PYTHON, RPA],
		links: getLinks(ROBOCORP_RPA_LEVEL_1_CERT_URL),
		Icon: ROBOCORP_ICON,
	},
	{
		title: 'Go - The Complete Guide',
		subtitle: 'Udemy. June 2025',
		description: 'Credential ID: UC-a0724864-1e61-4fcb-94d4-8837ca64b5cc',
		skills: [GIT, GITHUB, GO],
		links: getLinks(UDEMY_GO_COURSE_URL),
		Icon: UDEMY_ICON,
	},
	{
		title: 'GraphQL by Example',
		subtitle: 'Udemy. November 2024',
		description: 'Credential ID: UC-2f72d8c0-5e8c-4c08-a657-cb379948c6f1',
		skills: [GIT, GITHUB, GRAPHQL, NODE, REACT, JAVASCRIPT, TYPESCRIPT],
		links: getLinks(UDEMY_GRAPHQL_COURSE_URL),
		Icon: UDEMY_ICON,
	},
	{
		title: 'The Complete Cyber Security Course - Volume 1: Hackers Exposed!',
		subtitle: 'Udemy. November 2024',
		description: 'Credential ID: UC-1acdc51c-9652-40d8-80af-24d65aa27727',
		skills: [CYBER_SECURITY, LINUX],
		links: getLinks(UDEMY_CYBER_SECURITY_COURSE_1_URL),
		Icon: UDEMY_ICON,
	},
	{
		title: 'The Complete Flutter Development Bootcamp with Dart',
		subtitle: 'Udemy. April 2024',
		description: 'Credential ID: UC-3fd9599a-bff2-4960-8d34-dbb3b41ced55',
		skills: [DART, FLUTTER, GIT, GITHUB],
		links: getLinks(UDEMY_FLUTTER_COURSE_CERT_URL),
		Icon: UDEMY_ICON,
	},
	{
		title: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud - Locales',
		subtitle: 'Google Cloud Skills Boost. March 2023',
		description: 'Credential ID: 3311200',
		skills: [GCP],
		links: getLinks(GOOGLE_CLOUD_IA_COURSE_CERT_URL),
		Icon: GOOGLE_CLOUD_ICON,
	},
	{
		title: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud - Locales',
		subtitle: 'Google Cloud Skills Boost. March 2023',
		description: 'Credential ID: 3303084',
		skills: [GCP],
		links: getLinks(GOOGLE_CLOUD_INFRA_COURSE_CERT_URL),
		Icon: GOOGLE_CLOUD_ICON,
	},
	{
		title: 'Google Cloud Computing Foundations: Networking & Security - Locales',
		subtitle: 'Google Cloud Skills Boost. March 2023',
		description: 'Credential ID: 3305980',
		skills: [CYBER_SECURITY, GCP],
		links: getLinks(GOOGLE_CLOUD_NETWORKING_COURSE_CERT_URL),
		Icon: GOOGLE_CLOUD_ICON,
	},
	{
		title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals - Locales',
		subtitle: 'Google Cloud Skills Boost. March 2023',
		description: 'Credential ID: 3302433',
		skills: [GCP],
		links: getLinks(GOOGLE_CLOUD_FUNDAMENTALS_COURSE_CERT_URL),
		Icon: GOOGLE_CLOUD_ICON,
	},
	{
		title: 'The Complete 2020 Web Development Bootcamp',
		subtitle: 'Udemy. April 2020',
		description: 'Credential ID: UC-5d594204-a414-4cb1-a388-72e3daf7c1c6',
		skills: [CSS, GIT, GITHUB, HTML, JAVASCRIPT, JQUERY, MONGODB, NODE, REACT, SQL, TYPESCRIPT],
		links: getLinks(UDEMY_WEB_DEV_COURSE_CERT_URL),
		Icon: UDEMY_ICON,
	},
];
