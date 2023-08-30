import Banner from '../../components/Banner';
import { CIN_UFPE_URL } from '../../constants/urls';

export default function Academic() {
	const title = 'Education';
	const subtitle = 'Here I will show you my graduation activities and experience.';

	return (
		<div className="lg:self-start">
			<div className="max-w-2xl">
				<h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h2>
				<p className="mt-6 text-lg leading-8 text-zinc-300">{subtitle}</p>
			</div>
			<Banner link={{ url: CIN_UFPE_URL, label: 'Learn more about CIn-UFPE' }} />
		</div>
	);
}
