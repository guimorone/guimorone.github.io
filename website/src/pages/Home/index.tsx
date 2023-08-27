import { useState } from 'react';
import { Button } from 'flowbite-react';
import { LAST_UPDATE_CV } from '../../constants';
import { LANDING } from '../../constants/paths';
import CV from '../../assets/CV-Guilherme.pdf';
import type { SVGProps } from 'react';

const PDFIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
	<svg fill="currentColor" viewBox="0 0 512 512" {...props}>
		<path
			fillRule="evenodd"
			d="M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"
			clipRule="evenodd"
		/>
	</svg>
);

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
		<div className="p-6 sm:p-0 pt-14">
			<div id={LANDING} className="mx-auto max-w-2xl pt-24 text-center sm:pt-40 space-y-6">
				<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome!</h2>
				<p className="text-lg leading-8 text-gray-300">
					It is my pleasure to have you here.
					<br />
					Feel free to explore and learn more about me.
				</p>
				<div className="flex flex-col items-center gap-y-1">
					<p className="mb-1.5 text-base leading-6 text-gray-300">If you just want my Resumè, here it is:</p>
					<Button isProcessing={isProcessing} color="dark" onClick={onDownloadFile}>
						<PDFIcon className="mr-2 h-5 w-5" /> Download CV
					</Button>
					<p className="text-xs md:text-sm text-gray-300">Last update at {LAST_UPDATE_CV.toLocaleDateString()}</p>
				</div>
			</div>
		</div>
	);
}
