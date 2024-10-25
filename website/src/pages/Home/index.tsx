import Downloadable from '../../components/Downloadable';
import { title, label, footerText, filePath, filename, Icon } from './config';

export default function Home() {
	return (
		<div className="text-center space-y-6">
			<h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">Welcome!</h2>
			<p className="text-lg leading-8 text-zinc-300">
				It is my pleasure to have you here.
				<br />
				Feel free to explore and learn more about me.
			</p>
			<Downloadable
				title={title}
				label={label}
				footerText={footerText}
				filePath={filePath}
				filename={filename}
				Icon={Icon}
			/>
		</div>
	);
}
