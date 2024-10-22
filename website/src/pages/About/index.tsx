import Photo from '../../components/Photo';
import { title, descriptions } from './config';
import Eu from '../../assets/images/Eu.jpeg';

export default function About() {
	return (
		<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
			<div className="mx-auto lg:pl-20">
				<Photo src={Eu} alt="My Photo" />
			</div>
			<div className="lg:order-first lg:row-span-2">
				<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h1>
				<div className="mt-6 space-y-7 text-base text-zinc-300 text-justify">
					{descriptions?.map((d, index) => <p key={`about-description-${index}`}>{d}</p>)}
				</div>
			</div>
		</div>
	);
}
