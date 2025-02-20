import { MdOutlinePreview } from 'react-icons/md';
import { classNames } from '../../utils';
import type { FC } from 'react';
import type { DownloadableProps } from '../../@types/components';

const Downloadable: FC<DownloadableProps> = ({
	title,
	label,
	footerText,
	filePath,
	filename,
	preview = true,
	Icon,
	forceCenter = false,
}) => {
	return (
		<div className={classNames(!forceCenter && 'sm:items-start', 'flex flex-col items-center gap-y-1')}>
			<p
				className={classNames(
					!forceCenter && 'sm:text-left',
					'mb-1.5 text-base text-center leading-6 text-zinc-300'
				)}
			>
				{title}
			</p>
			<div
				className={classNames(!forceCenter && 'sm:items-start', 'flex flex-col items-center gap-2 lg:flex-row')}
			>
				{preview && (
					<a
						href={filePath}
						target="_blank"
						className="inline-flex items-center text-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>
						<MdOutlinePreview className="-ml-0.5 h-5 w-5" />
						<span>Show Preview</span>
					</a>
				)}
				<a
					href={filePath}
					target="_blank"
					download={filename}
					className="inline-flex items-center text-center gap-x-2 rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
				>
					<Icon className="-ml-0.5 h-5 w-5" />
					<span>Download {label}</span>
				</a>
			</div>
			{footerText && <p className="text-xs md:text-sm text-zinc-300">{footerText}</p>}
		</div>
	);
};

export default Downloadable;
