import { Tooltip } from 'flowbite-react';
import { classNames } from '../../utils';
import type { FC } from 'react';
import type { IconType } from '../../utils/icons';

export interface IFeedProps {
	activity: {
		title: string;
		subtitle: string;
		description?: string;
		comments?: string[];
		Icon?: { Element: IconType; background?: string };
		links?: { Icon: IconType; color?: string; label: string; url: string }[];
	}[];
}

const Feed: FC<IFeedProps> = ({ activity }) => {
	return (
		<div className="flow-root">
			<ul role="list" className="-mb-8">
				{activity.map((item, index) => (
					<li key={`feed_${item.title}_${index}`}>
						<div className="relative pb-8">
							{index !== activity.length - 1 ? (
								<span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-zinc-400" aria-hidden="true" />
							) : null}
							<div className="relative flex gap-x-3">
								<span
									className={classNames(
										item?.Icon?.background || 'bg-teal-600',
										'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
									)}
								>
									{item.Icon && <item.Icon.Element className="h-5 w-5 text-zinc-100" aria-hidden="true" />}
								</span>
								<div className="flex min-w-0 flex-1 flex-col justify-between pt-1.5 gap-y-2.5">
									<div className="-space-y-0.5">
										<h3 className="text-lg md:text-xl text-zinc-100">{item.title}</h3>
										<p className="text-xs md:text-sm text-zinc-300">{item.subtitle}</p>
									</div>
									{item.description && (
										<p className="text-sm md:text-base text-zinc-300 text-justify">{item.description}</p>
									)}
									{item.comments && (
										<div className="text-xs md:text-sm text-zinc-300">
											{item.comments.map((c, idx) => (
												<p key={`feed_comments_${idx}`}>{c}</p>
											))}
										</div>
									)}
									<div className="flex gap-x-2 md:gap-x-4">
										{item.links &&
											item.links.length > 0 &&
											item.links.map((link, idx) => (
												<a
													key={`${link.label}_${idx}`}
													href={link.url}
													target="_blank"
													className={classNames(link.color || 'text-zinc-300 hover:text-zinc-200')}
												>
													<Tooltip content={link.label} animation="duration-150">
														<link.Icon className="w-6 h-6" aria-hidden="true" />
													</Tooltip>
													<span className="sr-only">{link.label}</span>
												</a>
											))}
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Feed;
