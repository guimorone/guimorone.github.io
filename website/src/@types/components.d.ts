import type { ReactNode, JSX, ImgHTMLAttributes } from 'react';
import type { ActivityType } from '.';

export interface NavbarProps {
	show?: boolean;
}

export interface BannerProps {
	title?: string;
	link: { url: string; label: string };
}

export interface CenterProps {
	children: ReactNode;
	className?: string;
	HtmlTag?: keyof JSX.IntrinsicElements;
}

export interface FeedProps {
	activities: ActivityType[];
}

export interface ObjectFeedProps {
	title: string;
	activities: ActivityType[];
}

export interface PageProps {
	title: string;
	subtitle?: string;
	photo?: ImgHTMLAttributes<HTMLElement>;
	activities: ActivityType[] | { [key: string]: ActivityType[] };
}

export interface PhotoProps extends ImgHTMLAttributes<HTMLElement> {
	containerClassName?: string;
	className?: string;
}

export interface TitleProps {
	title: string;
	subtitle?: string;
}
