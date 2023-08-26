import { LANDING } from '../../constants/paths';

export default function Home() {
	return (
		<div className="pt-14">
			<div id={LANDING} className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome!</h2>
				<p className="mt-6 text-lg leading-8 text-gray-300">
					It is my pleasure to have you here.
					<br />
					Feel free to explore and learn more about me.
				</p>
			</div>
		</div>
	);
}
