import type { FC } from 'react';
import type { GridProps } from '../../@types/components';

const Grid: FC<GridProps> = ({ title, children }) => {
	return (
		<>
			{title && <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">{title}</h3>}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-start self-center sm:self-auto">
				{children}
			</div>
		</>
	);
};

export default Grid;