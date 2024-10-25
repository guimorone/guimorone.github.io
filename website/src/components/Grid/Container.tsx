import Title from '../Title';
import type { FC } from 'react';
import type { GridContainerProps } from '../../@types/components';

const GridContainer: FC<GridContainerProps> = ({ title, subtitle, children }) => {
	return (
		<div className="flex flex-col gap-y-12 w-full mb-auto">
			<Title title={title} subtitle={subtitle} />
			{children}
		</div>
	);
};

export default GridContainer;
