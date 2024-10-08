import Banner from '../../components/Banner';
import Page from '../../components/Page';
import { ChalkboardUser, GraduationCap } from '../../utils/icons';
import { CIN_UFPE_URL } from '../../constants/urls';
import UFPE from '../../assets/images/UFPE.png';

export default function Academic() {
	const title = 'Education';
	const subtitle = 'Allow me to present to you my academic journey and experiences throughout my graduation.';

	const experiences = [
		{
			title: 'Bachelor in Computer Engineering',
			subtitle: 'Federal University of Pernambuco. Feb 2019 - Aug 2024',
			comments: ['Final grade (GPA): 9.01/10.0'],
			Icon: { Element: GraduationCap, background: 'bg-rose-600' },
		},
		{
			title: 'Student Teaching Assistant',
			subtitle: 'Federal University of Pernambuco. Jun 2022 - Mar 2024',
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

	return (
		<>
			<Page title={title} subtitle={subtitle} activity={experiences} photo={{ src: UFPE, alt: 'UFPE logo' }} />
			<Banner link={{ url: CIN_UFPE_URL, label: 'Learn more about CIn-UFPE' }} />
		</>
	);
}
