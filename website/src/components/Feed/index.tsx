import { Link } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';
import { classNames, sortByTitleOrLabelFunction } from '../../utils';
import { SKILLS } from '../../constants/paths';
import type { FC } from 'react';
import type { FeedProps } from '../../@types/components';

const Feed: FC<FeedProps> = ({ activities }) => {
	return (
		<div className="flow-root">
			<ul className="-mb-8">
				{activities.map((item, index) => {
					const skills = item.skills?.toSorted(sortByTitleOrLabelFunction);

					return (
						<li key={`feed-${item.title}-${index}`}>
							<div className="relative pb-8">
								{index !== activities.length - 1 && (
									<span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-zinc-400" aria-hidden="true" />
								)}
								<div className="relative flex gap-x-3">
									<span
										className={classNames(
											item?.Icon?.background ?? 'bg-teal-600',
											'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
										)}
									>
										{item.Icon && <item.Icon.Element className="w-5 h-5 text-zinc-100" aria-hidden="true" />}
									</span>
									<div className="flex min-w-0 flex-1 flex-col justify-between pt-1.5 gap-y-2.5">
										<div className="-space-y-0.5">
											<h3 className="text-lg md:text-xl text-zinc-100">{item.title}</h3>
											<p className="text-xs md:text-sm text-zinc-300">{item.subtitle}</p>
										</div>
										{item.description &&
											(item.description instanceof Array ? (
												<ul className="space-y-0.5 list-inside list-disc">
													{item.description.map((d, idx) => (
														<li
															key={`feed-${item.title}-${index}-description-${idx}`}
															className="text-sm text-justify md:text-base text-zinc-300"
														>
															{d}
														</li>
													))}
												</ul>
											) : (
												<p className="text-sm text-justify md:text-base text-zinc-300">{item.description}</p>
											))}
										{skills && (
											<ul className="flex flex-wrap gap-2 my-2">
												{skills?.map((skill, idx) => (
													<Link
														key={`feed-skill-${skill.label}-${idx}`}
														to={`${SKILLS}?skill=${skill.label}`}
														className="flex items-center gap-2 px-3 py-1 duration-150 border rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600"
													>
														{typeof skill.Icon.Element === 'object' ? (
															<skill.Icon.Element.withoutColor className="w-3.5 h-3.5 md:w-4 md:h-4" />
														) : (
															<skill.Icon.Element className="w-3.5 h-3.5 md:w-4 md:h-4" />
														)}
														<p className="text-xs md:text-sm text-zinc-300">{skill.label}</p>
													</Link>
												))}
											</ul>
										)}
										{item.comments && (
											<ul className="space-y-0.5">
												{item.comments?.map((comment, idx) => (
													<li key={`feed-comment-${idx}`} className="text-xs md:text-sm text-zinc-300">
														{comment}
													</li>
												))}
											</ul>
										)}
										<div className="flex gap-x-2 md:gap-x-4">
											{item?.links?.map((link, idx) => (
												<a
													key={`${link.label}-${idx}`}
													href={link.url}
													target="_blank"
													className={classNames(link.color ?? 'text-zinc-300 hover:text-zinc-200')}
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
					);
				})}
			</ul>
		</div>
	);
};

export default Feed;
