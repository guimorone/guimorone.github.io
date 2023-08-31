import { classNames } from '../../utils';
import type { FC, ReactNode, JSX } from 'react';

interface IFuncProps {
	children: ReactNode;
	className?: string;
	HtmlTag?: keyof JSX.IntrinsicElements;
}

const Center: FC<IFuncProps> = ({ children, className, HtmlTag = 'div' }) => {
	return (
		<HtmlTag className={classNames(className, 'flex flex-1 self-center items-center justify-center')}>
			{children}
		</HtmlTag>
	);
};

export default Center;
