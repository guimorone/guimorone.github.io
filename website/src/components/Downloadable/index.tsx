import { useState, type FC } from 'react';
import { Button } from 'flowbite-react';
import { downloadFile } from '../../utils';
import type { DownloadableProps } from '../../@types/components';

const Downloadable: FC<DownloadableProps> = ({ title, label, footerText, filePath, filename, Icon }) => {
	const [isProcessing, setIsProcessing] = useState<boolean>(false);

	const onDownloadFile = async (): Promise<void> => await downloadFile(filePath, filename, setIsProcessing);

	return (
		<div className="flex flex-col items-center gap-y-1">
			<p className="mb-1.5 text-base leading-6 text-zinc-300">{title}</p>
			<Button disabled={isProcessing} isProcessing={isProcessing} color="dark" onClick={onDownloadFile}>
				<Icon className="mr-2 h-5 w-5" /> Download {label}
			</Button>
			{footerText && <p className="text-xs md:text-sm text-zinc-300">{footerText}</p>}
		</div>
	);
};

export default Downloadable;
