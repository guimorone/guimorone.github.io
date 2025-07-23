import DeutschunterrichtA11 from '../../assets/pdfs/Deutschunterricht - A1.1.pdf';
import DeutschunterrichtA12 from '../../assets/pdfs/Deutschunterricht - A1.2.pdf';
import DiplomaUFPEEN from '../../assets/pdfs/Diploma UFPE (EN).pdf';
import DiplomaUFPEPTBR from '../../assets/pdfs/Diploma UFPE (PT-BR).pdf';
import CyberSecurityVolume1Certificate from '../../assets/pdfs/The Complete Cyber Security Course - Volume 1 - Hackers Exposed - Certificate.pdf';
import { sortByTitleOrLabelFunction } from '../../utils';
import { PDFIcon } from '../../utils/icons';
import type { DownloadableProps } from '../../types/components';

export const title: string = 'Warehouse';
export const subtitle: string = 'Here is where you can view other files and documents.';

export const documents: { title: string; files: DownloadableProps[] }[] = [
	{
		title: 'Education',
		files: [
			{
				title: 'Diploma UFPE (EN)',
				label: 'Diploma',
				filepath: DiplomaUFPEEN,
				filename: 'Diploma Guilherme - UFPE (EN)',
				Icon: PDFIcon,
			},
			{
				title: 'Diploma UFPE (PT-BR)',
				label: 'Diploma',
				filepath: DiplomaUFPEPTBR,
				filename: 'Diploma Guilherme - UFPE (PT-BR)',
				Icon: PDFIcon,
			},
		].sort(sortByTitleOrLabelFunction),
	},
	{
		title: 'Languages',
		files: [
			{
				title: "German Course A1.1's conclusion statement",
				label: 'A1.1',
				filepath: DeutschunterrichtA11,
				filename: 'German Course A1.1 - Guilherme.pdf',
				Icon: PDFIcon,
			},
			{
				title: "German Course A1.2's conclusion statement",
				label: 'A1.2',
				filepath: DeutschunterrichtA12,
				filename: 'German Course A1.2 - Guilherme.pdf',
				Icon: PDFIcon,
			},
		].sort(sortByTitleOrLabelFunction),
	},
	{
		title: 'Courses',
		files: [
			{
				title: 'The Complete Cyber Security Course - Volume 1',
				label: 'Certificate',
				filepath: CyberSecurityVolume1Certificate,
				filename: 'The Complete Cyber Security Course: Hackers Exposed - Volume 1 - Certificate',
				Icon: PDFIcon,
			},
		].sort(sortByTitleOrLabelFunction),
	},
].sort(sortByTitleOrLabelFunction);
