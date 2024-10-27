import type { FC } from 'react';
import type { TitleProps } from '../../@types/components';

const Title: FC<TitleProps> = ({ title, subtitle }) => {
	return (
		<div className="flex flex-col text-center sm:text-left gap-y-6">
			<h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h2>
			{subtitle && <p className="text-base text-zinc-300 text-justify">{subtitle}</p>}
		</div>
	);
};

export default Title;
