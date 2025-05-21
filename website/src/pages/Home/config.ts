import { VscJson } from 'react-icons/vsc';
import { PDFIcon } from '../../utils/icons';
import { formatDate } from '../../utils/dates';
import { LAST_UPDATE_CV } from '../../constants/dates';
import CV from '../../assets/pdfs/CV.pdf';
import ReactiveResumeConfig from '../../assets/jsons/Reactive Resume Config.json?url';
import type { IconType } from 'react-icons';
import type { DownloadableProps } from '../../@types/components';

export const title: string = 'If you just want my Résumé, here it is:';
export const label: string = 'CV';
export const footerText: string = `Last update at ${formatDate(LAST_UPDATE_CV)}`;
export const filepath: string = CV;
export const filename: string = 'CV - Guilherme.pdf';
export const Icon: IconType = PDFIcon;
export const additionalButtons: DownloadableProps['additionalButtons'] = [
	{
		Icon: VscJson,
		bgColor: 'bg-orange-700 hover:bg-orange-600 focus-visible:outline-orange-600',
		label: 'Resume Config JSON',
		filepath: ReactiveResumeConfig,
		filename: 'Guilherme - Reactive Resume Config.json',
	},
];
