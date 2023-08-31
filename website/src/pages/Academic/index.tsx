import Banner from '../../components/Banner';
import Feed from '../../components/Feed';
import Photo from '../../components/Photo';
import { GraduationCap, ChalkboardUser } from '../../utils/icons';
import { CIN_UFPE_URL } from '../../constants/urls';
import UFPE from '../../assets/images/UFPE.png';

export default function Academic() {
	const title = 'Education';
	const subtitle = 'Allow me to present to you my academic journey and experiences throughout my graduation.';

	const experiences = [
		{
			title: 'Student Teaching Assistant',
			subtitle: 'Federal University of Pernambuco. Jun 2022 - Current',
			description:
				'Dedicated Student Teaching Assistant in the field of Software and Systems Engineering. Providing invaluable support to students in software development and requirements engineering, with a primary goal of crafting top-tier applications of exceptional quality.',
			comments: ['Technologies used: React, Node, Python and more.'],
			Icon: { Element: ChalkboardUser, background: 'bg-rose-600' },
		},
		{
			title: 'Bachelor in Computer Engineering',
			subtitle: 'Federal University of Pernambuco. Feb 2019 - Current',
			description:
				'I am engaged in the study of designing systems that integrate computer functionality with control systems, communications, and hardware components.',
			comments: ['Expect to graduate by the end of 2024.', 'GPA: 9.05/10'],
			Icon: { Element: GraduationCap, background: 'bg-rose-600' },
		},
	];

	return (
		<>
			<div className="lg:flex lg:justify-between lg:gap-x-12 space-y-12 lg:space-y-0">
				<div className="w-full max-w-2xl flex flex-col -gap-1">
					<h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h2>
					<p className="mt-6 text-base text-zinc-300 text-justify">{subtitle}</p>
					<Photo
						src={UFPE}
						alt="UFPE Logo"
						className="object-cover"
						containerClassName="w-20 sm:w-28 md:w-32 lg:w-36 max-w-xs self-center mt-4"
					/>
				</div>
				<Feed activity={experiences} />
			</div>
			<Banner link={{ url: CIN_UFPE_URL, label: 'Learn more about CIn-UFPE' }} />
		</>
	);
}
