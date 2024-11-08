import type { FC } from 'react';
import type { PhotoProps } from '../../@types/components';

const Photo: FC<PhotoProps> = ({
	containerClassName = 'max-w-xs px-2.5 lg:max-w-none rounded-2xl bg-zinc-300',
	className = 'object-cover aspect-square rotate-3 rounded-2xl bg-zinc-800',
	src,
	alt,
	...props
}) => (
	<div className={containerClassName}>
		<img className={className} src={src} alt={alt} {...props} />
	</div>
);

export default Photo;
