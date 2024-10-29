import { DEFAULT_DOCUMENT_TITLE } from '../constants';

export function classNames(...classes: any[]): string {
	return classes.filter(Boolean).join(' ');
}

const capitalizeString = (str: string): string => {
	const firstChar = str.charAt(0).toUpperCase();
	const remainingChars = str.slice(1);

	return `${firstChar}${remainingChars}`;
};

export const getDocumentTitle = (pathname: string, separator: string = ' | '): string =>
	capitalizeString(pathname.slice(1)) + separator + DEFAULT_DOCUMENT_TITLE;
