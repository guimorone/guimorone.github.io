import { classNames } from '../../utils';

import type { FC } from 'react';
import type { CenterProps } from '../../@types/components';

const Center: FC<CenterProps> = ({ children, className, HtmlTag = 'div' }) => {
	return (
		<HtmlTag className={classNames(className, 'flex items-center self-center justify-center flex-1')}>
			{children}
		</HtmlTag>
	);
};

export default Center;
