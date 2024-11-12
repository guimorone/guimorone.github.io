const locale = navigator.language;

// INFO: `date.toLocaleDateString()` == short dateStyle
export const formatDate = (date: Date, dateStyle: 'full' | 'long' | 'medium' | 'short' = 'short'): string =>
	new Intl.DateTimeFormat(locale, { dateStyle }).format(date);
