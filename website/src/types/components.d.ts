import type { ImgHTMLAttributes, JSX, ReactNode } from 'react';
import type { ActivityType, SkillType } from '.';
import type { IconType } from './icons';

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
	currentSkill?: string;
}

export interface ObjectFeedProps {
	title: string;
	activities: ActivityType[];
	currentSkill?: string;
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
	filepath: string;
	filename: string;
	preview?: boolean;
	Icon: IconType;
	forceCenter?: boolean;
	additionalButtons?: {
		Icon: DownloadableProps['Icon'];
		bgColor: string;
		textColor?: string;
		label: DownloadableProps['label'];
		filepath: DownloadableProps['filepath'];
		filename: DownloadableProps['filename'];
	}[];
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

export interface CollapsableProps {
	title: string;
	children?: ReactNode;
}

export interface StarsProps {
	rating: SkillType['rating'];
}

export interface ModalProps {
	open: boolean;
	onClose: () => void;
	Icon?: IconType;
	title: string;
	subtitle?: string;
	children: ReactNode;
}

export interface SkillDescriptionProps {
	currentSkill: SkillType | null;
	onClose: ModalProps['onClose'];
}
