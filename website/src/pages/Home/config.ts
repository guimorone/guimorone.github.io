import { PDFIcon } from '../../utils/icons';
import { formatDate } from '../../utils/dates';
import { LAST_UPDATE_CV } from '../../constants/dates';
import CV from '../../assets/pdfs/CV-Guilherme.pdf';
import type { IconType } from 'react-icons';

export const title: string = 'If you just want my Résumé, here it is:';
export const label: string = 'CV';
export const footerText: string = `Last update at ${formatDate(LAST_UPDATE_CV)}`;
export const filePath: string = CV;
export const filename: string = 'CV-Guilherme.pdf';
export const Icon: IconType = PDFIcon;
