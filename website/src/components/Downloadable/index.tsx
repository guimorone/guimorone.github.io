import { useState, type FC } from 'react';
import { Button, Modal } from 'flowbite-react';
import { MdOutlinePreview } from 'react-icons/md';
import { downloadFile } from '../../utils';
import type { DownloadableProps } from '../../@types/components';

const Downloadable: FC<DownloadableProps> = ({
	title,
	label,
	footerText,
	filePath,
	filename,
	preview = true,
	Icon,
}) => {
	const [showPreview, setShowPreview] = useState<boolean>(false);
	const [isProcessing, setIsProcessing] = useState<boolean>(false);

	const handleShowPreview = (): void => setShowPreview(true);
	const handleClosePreview = (): void => setShowPreview(false);
	const onDownloadFile = async (): Promise<void> => await downloadFile(filePath, filename, setIsProcessing);

	return (
		<>
			<div className="flex flex-col items-center gap-y-1">
				<p className="mb-1.5 text-base text-center leading-6 text-zinc-300">{title}</p>
				<div className="flex flex-col lg:flex-row items-center gap-2">
					{preview && (
						<Button color="light" onClick={handleShowPreview}>
							<MdOutlinePreview className="mr-2 h-5 w-5" /> Show Preview
						</Button>
					)}
					<Button disabled={isProcessing} isProcessing={isProcessing} color="dark" onClick={onDownloadFile}>
						<Icon className="mr-2 h-5 w-5" /> Download {label}
					</Button>
				</div>
				{footerText && <p className="text-xs md:text-sm text-zinc-300">{footerText}</p>}
			</div>
			<Modal show={showPreview} onClose={handleClosePreview}>
				<Modal.Header className="font-bold">{label} Preview</Modal.Header>
				<Modal.Body>
					<iframe src={filePath} width="100%" height="500px" />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Downloadable;
