import type { ReactNode, JSX, ImgHTMLAttributes } from 'react';
import type { ActivityType } from '.';
import type { IconType } from './icons';

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

export interface DownloadableProps {
	title: string;
	label: string;
	footerText?: string;
	filePath: string;
	filename: string;
	preview?: boolean;
	Icon: IconType;
}

export interface GridProps {
	title?: string;
	children?: ReactNode;
}

export interface GridContainerProps {
	title: string;
	subtitle: string;
	children?: ReactNode;
}
