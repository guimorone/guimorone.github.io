import { Link } from 'react-router-dom';
import { PersonDiggingIcon } from '../../utils/icons';
import { HOME } from '../../constants/paths';

export default function EmptyPage() {
	return (
		<div className="min-h-full">
			<div className="px-6 sm:px-0 py-16 sm:pt-40 text-center">
				<div className="inline-flex items-center gap-x-2">
					<PersonDiggingIcon className="ml-2 h-4 w-4 text-yellow-200" />
					<span className="text-base font-semibold leading-8 text-white">Working...</span>
				</div>
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">This page is not done yet</h1>
				<p className="mt-4 mb-8 text-base text-white/70 sm:mt-6">
					New content will be displayed here, as soon as possible.
				</p>
				<Link to={HOME} className="text-sm font-semibold leading-7 text-white hover:text-gray-200">
					<span aria-hidden="true">&larr;</span> Back to home
				</Link>
			</div>
		</div>
	);
}
