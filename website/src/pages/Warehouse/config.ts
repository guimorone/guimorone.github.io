import { sortByTitleOrLabelFunction } from '../../utils';
import { PDFIcon } from '../../utils/icons';
import DeutschunterrichtA11 from '../../assets/pdfs/Deutschunterricht - A1.1.pdf';
import DeutschunterrichtA12 from '../../assets/pdfs/Deutschunterricht - A1.2.pdf';
import CyberSecurityVolume1Certificate from '../../assets/pdfs/The Complete Cyber Security Course - Volume 1 - Hackers Exposed - Certificate.pdf';
import type { DownloadableProps } from '../../@types/components';

export const title: string = 'Warehouse';
export const subtitle: string = 'Here is where you can view other shared files/documents.';

export const documents: { title: string; files: DownloadableProps[] }[] = [
	{
		title: 'Languages',
		files: [
			{
				title: "German Course A1.1's conclusion statement",
				label: 'A1.1',
				filePath: DeutschunterrichtA11,
				filename: 'German Course A1.1 - Guilherme.pdf',
				Icon: PDFIcon,
			},
			{
				title: "German Course A1.2's conclusion statement",
				label: 'A1.2',
				filePath: DeutschunterrichtA12,
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
				filePath: CyberSecurityVolume1Certificate,
				filename: 'The Complete Cyber Security Course: Hackers Exposed - Volume 1 - Certificate',
				Icon: PDFIcon,
			},
		].sort(sortByTitleOrLabelFunction),
	},
].sort(sortByTitleOrLabelFunction);
