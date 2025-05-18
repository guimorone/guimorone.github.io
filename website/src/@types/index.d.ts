import type { HTMLAttributeAnchorTarget } from 'react';
import type { IconType } from './icons';

export type GenericData = { [key: string]: any };

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

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

export type SkillType = {
	Icon: { Element: IconType; color?: string };
	label: string;
	rating: IntRange<1, 6>;
};
