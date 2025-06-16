import type { ForwardRefExoticComponent, JSX, PropsWithoutRef, RefAttributes, SVGProps } from 'react';
import type { IconType as ReactIconType } from 'react-icons';

type HeroiconType = ForwardRefExoticComponent<
	PropsWithoutRef<SVGProps<SVGSVGElement>> & {
		title?: string;
		titleId?: string;
	} & RefAttributes<SVGSVGElement>
>;

export type DefaultIconType = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element;

export type IconType = HeroiconType | DefaultIconType | ReactIconType;
