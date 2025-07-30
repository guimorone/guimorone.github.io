import { SKILLS } from '@/constants/paths';
import { classNames, sortByTitleOrLabelFunction } from '@/utils';
import { Tooltip } from 'flowbite-react';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import type { FeedProps } from '@/types/components';

const Feed: FC<FeedProps> = ({ activities, currentSkill }) => {
	return (
		<div className="flow-root">
			<ul className="-mb-8">
				{activities.map((activity, index) => {
					const skills = activity.skills?.toSorted(sortByTitleOrLabelFunction);

					return (
						<li key={`feed-${activity.title}-${index}`}>
							<div className="relative pb-8">
								{index !== activities.length - 1 && (
									<span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-zinc-400" aria-hidden="true" />
								)}
								<div className="relative flex gap-x-3">
									<span
										className={classNames(
											activity.Icon?.background ?? 'bg-teal-600',
											'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
										)}
									>
										{activity.Icon && (
											<activity.Icon.Element className="size-5 text-zinc-100" aria-hidden="true" />
										)}
									</span>
									<div className="flex min-w-0 flex-1 flex-col justify-between pt-1.5 gap-y-2.5">
										<div className="-space-y-0.5">
											<h3 className="text-lg md:text-xl text-zinc-100">{activity.title}</h3>
											<p className="text-xs md:text-sm text-zinc-300">{activity.subtitle}</p>
											{activity.location && (
												<p className="text-xs md:text-sm text-zinc-300">{activity.location}</p>
											)}
										</div>
										{activity.description &&
											(activity.description instanceof Array ? (
												<ul className="space-y-0.5 list-inside list-disc">
													{activity.description.map((d, idx) => (
														<li
															key={`feed-${activity.title}-${index}-description-${idx}`}
															className="text-sm text-justify md:text-base text-zinc-300"
														>
															{d}
														</li>
													))}
												</ul>
											) : (
												<p className="text-sm text-justify md:text-base text-zinc-300">{activity.description}</p>
											))}
										{activity.comments && (
											<ul className="space-y-0.5">
												{activity.comments?.map((comment, idx) => (
													<li key={`feed-comment-${idx}`} className="text-xs md:text-sm text-zinc-300">
														{comment}
													</li>
												))}
											</ul>
										)}
										{skills && (
											<ul className="flex flex-wrap gap-2 my-2">
												{skills.map((skill, idx) => (
													<Link
														key={`feed-skill-${skill.label}-${idx}`}
														to={`${SKILLS}?skill=${skill.label}`}
														target={!currentSkill ? '_self' : '_blank'}
														className={classNames(
															currentSkill === skill.label
																? 'bg-zinc-200 border-zinc-100 pointer-events-none'
																: 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600',
															'flex items-center gap-2 px-3 py-1 duration-150 border rounded-full'
														)}
													>
														{typeof skill.Icon.Element === 'object' ? (
															<skill.Icon.Element.withoutColor
																className={classNames(
																	currentSkill === skill.label && 'text-zinc-800',
																	'size-3.5 md:size-4'
																)}
															/>
														) : (
															<skill.Icon.Element
																className={classNames(
																	currentSkill === skill.label && 'text-zinc-800',
																	'size-3.5 md:size-4'
																)}
															/>
														)}
														<span
															className={classNames(
																currentSkill === skill.label ? 'text-zinc-800' : 'text-zinc-300',
																'text-xs md:text-sm'
															)}
														>
															{skill.label}
														</span>
													</Link>
												))}
											</ul>
										)}
										<div className="flex gap-x-2 md:gap-x-4">
											{activity.links?.map((link, idx) => (
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
