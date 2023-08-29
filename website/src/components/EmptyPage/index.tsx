import { Link } from 'react-router-dom';
import { PersonDiggingIcon } from '../../utils/icons';
import { HOME } from '../../constants/paths';

export default function EmptyPage() {
	return (
		<div className="min-h-full text-center">
			<div className="inline-flex items-center gap-x-2">
				<PersonDiggingIcon className="ml-2 h-4 w-4 text-yellow-200 motion-safe:animate-bounce" />
				<span className="text-base font-semibold leading-8 text-zinc-100 motion-safe:animate-pulse">Working...</span>
			</div>
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
				This page has not been done yet
			</h1>
			<p className="mt-4 mb-8 text-base text-zinc-100/70 sm:mt-6">
				New content will be displayed here, as soon as possible.
			</p>
			<Link to={HOME} className="text-sm font-semibold leading-7 text-zinc-100 hover:text-zinc-200">
				<span aria-hidden="true">&larr;</span> Back to home
			</Link>
		</div>
	);
}
