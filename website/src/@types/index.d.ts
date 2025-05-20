import type { HTMLAttributeAnchorTarget } from 'react';
import type { IconType } from './icons';

export type GenericData = { [key: string]: any };

export type NavigationType = {
	name: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
	Icon: IconType;
	useLink?: boolean;
};

export type SkillType = {
	Icon: { Element: IconType | { withColor: IconType; withoutColor: IconType }; color?: string };
	label: string;
	rating: number;
};

export type LanguageSkillType = {
	label: SkillType['label'];
	description: string;
	rating: SkillType['rating'];
};

export type ActivityType = {
	title: string;
	subtitle: string;
	description?: string | string[];
	comments?: string[];
	skills?: SkillType[];
	Icon?: { Element: IconType; background?: string };
	links?: { Icon: IconType; color?: string; label: string; url: string }[];
};
