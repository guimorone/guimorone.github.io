import { useState } from 'react';
import { Button } from 'flowbite-react';
import { PDFIcon } from '../../utils/icons';
import { LAST_UPDATE_CV } from '../../constants';
import CV from '../../assets/CV-Guilherme.pdf';

const fileName = 'CV-Guilherme.pdf';

export default function Home() {
	const [isProcessing, setIsProcessing] = useState<boolean>(false);

	const onDownloadFile = (): void => {
		setIsProcessing(true);

		fetch(CV)
			.then(response => {
				response.blob().then(blob => {
					const fileURL = window.URL.createObjectURL(blob);

					const hiddenElement = document.createElement('a');
					hiddenElement.href = fileURL;
					hiddenElement.download = fileName;
					hiddenElement.click();
					hiddenElement.remove();
				});
			})
			.finally(() => setIsProcessing(false));
	};

	return (
		<div className="p-6 sm:p-0">
			<div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40 space-y-6">
				<h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">Welcome!</h2>
				<p className="text-lg leading-8 text-zinc-300">
					It is my pleasure to have you here.
					<br />
					Feel free to explore and learn more about me.
				</p>
				<div className="flex flex-col items-center gap-y-1">
					<p className="mb-1.5 text-base leading-6 text-zinc-300">If you just want my Resumè, here it is:</p>
					<Button isProcessing={isProcessing} color="dark" onClick={onDownloadFile}>
						<PDFIcon className="mr-2 h-5 w-5" /> Download CV
					</Button>
					<p className="text-xs md:text-sm text-zinc-300">Last update at {LAST_UPDATE_CV.toLocaleDateString()}</p>
				</div>
			</div>
		</div>
	);
}
