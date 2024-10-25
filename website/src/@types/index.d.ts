import type { IconType } from './icons';

export type ActivityType = {
	title: string;
	subtitle: string;
	description?: string | string[];
	comments?: string[];
	Icon?: { Element: IconType; background?: string };
	links?: { Icon: IconType; color?: string; label: string; url: string }[];
};
