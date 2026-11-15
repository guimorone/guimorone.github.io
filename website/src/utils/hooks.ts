import { useCallback, useEffect, useSyncExternalStore } from 'react';

export function useDocumentTitle(title: string): void {
	useEffect(() => {
		document.title = title;
	}, [title]);
}

export function useMediaQuery(query: string): boolean {
	const subscribe = useCallback(
		(onChange: () => void) => {
			const mediaQueryList = window.matchMedia(query);
			mediaQueryList.addEventListener('change', onChange);

			return () => mediaQueryList.removeEventListener('change', onChange);
		},
		[query]
	);

	return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
}
