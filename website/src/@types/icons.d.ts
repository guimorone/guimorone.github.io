import type { ForwardRefExoticComponent, PropsWithoutRef, SVGProps, RefAttributes, JSX } from 'react';

type HeroiconType = ForwardRefExoticComponent<
	PropsWithoutRef<SVGProps<SVGSVGElement>> & {
		title?: string;
		titleId?: string;
	} & RefAttributes<SVGSVGElement>
>;

export type DefaultIconType = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element;

export type IconType = HeroiconType | DefaultIconType;
