// NOTE: Use `navigator.language` to set the date based on the browser's language
const locale = 'en';

// INFO: `date.toLocaleDateString()` == short dateStyle
export const formatDate = (date: Date, dateStyle: 'full' | 'long' | 'medium' | 'short' = 'medium'): string =>
	new Intl.DateTimeFormat(locale, { dateStyle }).format(date);
