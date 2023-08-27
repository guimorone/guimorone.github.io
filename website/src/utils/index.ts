export function classNames(...classes: any[]): string {
	return classes.filter(Boolean).join(' ');
}

export const capitalizeString = (str: string): string => {
	const firstChar = str.charAt(0).toUpperCase();
	const remainingChars = str.slice(1);

	return `${firstChar}${remainingChars}`;
};
