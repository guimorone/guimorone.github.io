import { PDFIcon } from '../../utils/icons';
import DeutschunterrichtA11 from '../../assets/pdfs/Deutschunterricht - A1.1.pdf';
import DeutschunterrichtA12 from '../../assets/pdfs/Deutschunterricht - A1.2.pdf';
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
				Icon: PDFIcon,
			},
			{
				title: "German Course A1.2's conclusion statement",
				label: 'A1.2',
				filePath: DeutschunterrichtA12,
				Icon: PDFIcon,
			},
		].sort((f1, f2) => (f1.title > f2.title ? 1 : f2.title > f1.title ? -1 : 0)),
	},
].sort((d1, d2) => (d1.title > d2.title ? 1 : d2.title > d1.title ? -1 : 0));
