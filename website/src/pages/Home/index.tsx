import Downloadable from '../../components/Downloadable';
import { REACTIVE_RESUME_URL, RESUME_URL } from '../../constants/urls';
import { title, label, footerText, filepath, filename, Icon, additionalButtons } from './config';

export default function Home() {
	return (
		<div className="space-y-6 text-center">
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
				filename={filename}
				filepath={filepath}
				Icon={Icon}
				forceCenter
				additionalButtons={additionalButtons}
			/>
			<p className="!mt-2 text-xs md:text-sm text-zinc-300">
				You can always get the latest version{' '}
				<a
					href={RESUME_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="font-bold text-indigo-300 hover:text-indigo-200"
				>
					here
				</a>
				.<br />
				<span>
					Special thanks to the{' '}
					<a
						href={REACTIVE_RESUME_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="font-bold text-indigo-300 hover:text-indigo-200"
					>
						Reactive Resume
					</a>{' '}
					colaborators!
				</span>
			</p>
		</div>
	);
}
