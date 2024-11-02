import type { HTMLAttributeAnchorTarget } from 'react';
import type { IconType } from './icons';

export type ActivityType = {
	title: string;
	subtitle: string;
	description?: string | string[];
	comments?: string[];
	Icon?: { Element: IconType; background?: string };
	links?: { Icon: IconType; color?: string; label: string; url: string }[];
};

export type NavigationType = {
	name: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
	Icon: IconType;
	useLink?: boolean;
};
