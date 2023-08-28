import Photo from '../../components/Photo';
import Eu from '../../assets/images/Eu.jpeg';

const title = "Hello, I'm Guilherme, and here is a nutshell version of who I am.";
const descriptions = [
	"Originally from Rio but now based in Recife, I've had the privilege of growing up in two vibrant cities. My passions are as diverse as my background, ranging from an avid love for games and books to an insatiable curiosity for travel and technology.",
	"Currently, I'm dedicated to expanding my horizons as a Computer Engineering student at CIn - UFPE. Beyond academics, I'm also actively contributing my skills as a Software Engineer at Oncase, where I have the opportunity to bring innovative ideas to life.",
];

export default function About() {
	return (
		<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
			<div className="mx-auto lg:pl-20">
				<Photo src={Eu} alt="My Photo" />
			</div>
			<div className="lg:order-first lg:row-span-2">
				<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h1>
				<div className="mt-6 space-y-7 text-base text-zinc-300 text-justify">
					{descriptions?.map((d, index) => <p key={`about_description_${index}`}>{d}</p>)}
				</div>
			</div>
		</div>
	);
}
