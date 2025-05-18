import { DEFAULT_DOCUMENT_TITLE } from '../constants';
import type { GenericData } from '../@types';

export const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ');

function capitalizeString(str: string): string {
	const firstChar = str.charAt(0).toUpperCase();
	const remainingChars = str.slice(1);

	return `${firstChar}${remainingChars}`;
}

export const getDocumentTitle = (pathname: string, separator: string = ' | '): string =>
	capitalizeString(pathname.slice(1)) + separator + DEFAULT_DOCUMENT_TITLE;

export function sortByTitleOrLabelFunction(e1: GenericData, e2: GenericData): number {
	const element1: string = e1?.title !== undefined ? e1.title : e1.label;
	const element2: string = e2?.title !== undefined ? e2.title : e2.label;

	return element1 > element2 ? 1 : element2 > element1 ? -1 : 0;
}

export function sortByRatingFunction(e1: GenericData, e2: GenericData): number {
	if (!('rating' in e1) || !('rating' in e2)) return 0;

	return e1.rating > e2.rating ? -1 : e2.rating > e1.rating ? 1 : 0;
}
