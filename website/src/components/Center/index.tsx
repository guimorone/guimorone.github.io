import { classNames } from '../../utils';
import type { FC } from 'react';
import type { CenterProps } from '../../@types/components';

const Center: FC<CenterProps> = ({ children, className, HtmlTag = 'div' }) => {
	return (
		<HtmlTag className={classNames(className, 'flex flex-1 self-center items-center justify-center')}>
			{children}
		</HtmlTag>
	);
};

export default Center;
