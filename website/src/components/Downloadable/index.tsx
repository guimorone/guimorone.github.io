import { MdOutlinePreview } from 'react-icons/md';
import type { FC } from 'react';
import type { DownloadableProps } from '../../@types/components';

const Downloadable: FC<DownloadableProps> = ({ title, label, footerText, filePath, preview = true, Icon }) => {
	return (
		<>
			<div className="flex flex-col items-center gap-y-1">
				<p className="mb-1.5 text-base text-center leading-6 text-zinc-300">{title}</p>
				<div className="flex flex-col lg:flex-row items-center gap-2">
					{preview && (
						<a
							href={filePath}
							target="_blank"
							className="inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							<MdOutlinePreview className="-ml-0.5 h-5 w-5" />
							<span>Show Preview</span>
						</a>
					)}
					<a
						href={filePath}
						target="_blank"
						download
						className="inline-flex items-center gap-x-2 rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
					>
						<Icon className="-ml-0.5 h-5 w-5" />
						<span>Download {label}</span>
					</a>
				</div>
				{footerText && <p className="text-xs md:text-sm text-zinc-300">{footerText}</p>}
			</div>
		</>
	);
};

export default Downloadable;
