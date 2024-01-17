import { useState, useRef, useEffect, type Dispatch, type SetStateAction } from 'react';

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
		[]
	);

	return [title, setTitle];
}
