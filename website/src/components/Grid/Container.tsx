import Title from '../Title';
import type { FC } from 'react';
import type { GridContainerProps } from '../../types/components';

const GridContainer: FC<GridContainerProps> = ({ title, subtitle, children }) => {
	return (
		<div className="flex flex-col w-full mb-auto gap-y-12">
			<Title title={title} subtitle={subtitle} />
			{children}
		</div>
	);
};

export default GridContainer;
