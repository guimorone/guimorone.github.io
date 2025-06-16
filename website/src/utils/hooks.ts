import { useEffect, useRef, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

export function useDocumentTitle(prevailOnUnmount = false): [string, Dispatch<SetStateAction<string>>] {
	const [title, setTitle] = useState<string>(document.title);
	const defaultTitle = useRef<string>(document.title);

	useEffect(() => {
		document.title = title;
	}, [title]);

	useEffect(
		() => () => {
			if (!prevailOnUnmount) document.title = defaultTitle.current;
		},
		[prevailOnUnmount]
	);

	return [title, setTitle];
}
