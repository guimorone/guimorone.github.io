import type { FC } from 'react';
import type { GridProps } from '../../@types/components';

const Grid: FC<GridProps> = ({ title, children }) => {
	return (
		<>
			{title && <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">{title}</h3>}
			<div className="grid self-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:place-items-start lg:self-auto">
				{children}
			</div>
		</>
	);
};

export default Grid;
