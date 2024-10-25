import { DEFAULT_DOCUMENT_TITLE } from '../constants';
import type { Dispatch, SetStateAction } from 'react';

export function classNames(...classes: any[]): string {
	return classes.filter(Boolean).join(' ');
}

export const capitalizeString = (str: string): string => {
	const firstChar = str.charAt(0).toUpperCase();
	const remainingChars = str.slice(1);

	return `${firstChar}${remainingChars}`;
};

export const getDocumentTitle = (pathname: string): string =>
	capitalizeString(pathname.slice(1)) + ' | ' + DEFAULT_DOCUMENT_TITLE;

export async function downloadFile(
	filePath: string,
	filename: string,
	setLoadingState?: Dispatch<SetStateAction<boolean>>,
	callback?: () => void
): Promise<void> {
	if (setLoadingState) setLoadingState(true);

	const response = await fetch(filePath);
	const blob = await response.blob();
	const fileURL = window.URL.createObjectURL(blob);
	const hiddenElement = document.createElement('a');
	hiddenElement.href = fileURL;
	hiddenElement.download = filename;
	hiddenElement.click();
	hiddenElement.remove();

	window.URL.revokeObjectURL(fileURL);

	if (setLoadingState) setLoadingState(false);

	if (callback) callback();
}
