import { useEffect, useRef } from 'react';
import Collapsible from '@/components/Collapsible';
import Grid from '@/components/Grid';
import GridContainer from '@/components/Grid/Container';
import Stars from '@/components/Stars';
import { MODAL_OPEN_VALUE, MODAL_SEARCH_PARAM, SKILL_SEARCH_PARAM } from '@/constants/paths';
import { LINKEDIN_SKILLS_URL } from '@/constants/urls';
import { classNames, getSkillSearchParams } from '@/utils';
import { useSearchParams } from 'react-router-dom';
import SkillDescription from './SkillDescription';
import { languages, skills, subtitle, title } from './config';
import type { SkillType } from '@/types';

export default function Skills() {
	const [searchParams, setSearchParams] = useSearchParams();
	const selectedRef = useRef<HTMLDivElement>(null);

	const skillSearchParam = searchParams.get(SKILL_SEARCH_PARAM)?.toLowerCase();
	const selectedSkill = skills.find(skill => skill.label.toLowerCase() === skillSearchParam) ?? null;
	const isModalOpen = searchParams.get(MODAL_SEARCH_PARAM) === MODAL_OPEN_VALUE;

	useEffect(() => {
		selectedRef.current?.scrollIntoView({ block: 'nearest' });
	}, [selectedSkill]);

	const onOpenModal = (skill: SkillType): void => {
		setSearchParams(getSkillSearchParams(skill.label, true), { preventScrollReset: true });
	};
	const onCloseModal = (): void => {
		if (selectedSkill) setSearchParams(getSkillSearchParams(selectedSkill.label, false), { preventScrollReset: true });
	};

	return (
		<>
			<SkillDescription currentSkill={isModalOpen ? selectedSkill : null} onClose={onCloseModal} />
			<GridContainer title={title} subtitle={subtitle}>
				<Collapsible title="Tools">
					<Grid>
						{skills.map(skill => {
							const isSelected = skill === selectedSkill;

							return (
								<div
									key={`skill-${skill.label}`}
									ref={isSelected ? selectedRef : null}
									className="relative flex items-center py-1 rounded-lg gap-x-2 group"
								>
									<button
										type="button"
										tabIndex={-1}
										aria-hidden="true"
										onClick={() => onOpenModal(skill)}
										className={classNames(
											isSelected && 'bg-zinc-900',
											'absolute inset-0 -mx-2 -my-1 rounded-lg group-hover:bg-zinc-800 group-active:bg-zinc-900'
										)}
									/>
									<button
										type="button"
										onClick={() => onOpenModal(skill)}
										className="relative flex items-center gap-x-2"
									>
										{typeof skill.Icon.Element === 'object' ? (
											<skill.Icon.Element.withColor className="w-auto h-4 sm:h-5 md:h-6" aria-hidden="true" />
										) : (
											<skill.Icon.Element
												className={classNames(skill.Icon.color, 'w-auto h-4 sm:h-5 md:h-6')}
												aria-hidden="true"
											/>
										)}
										<span className="text-sm md:text-base text-zinc-100">{skill.label}</span>
										<Stars rating={skill.rating} />
									</button>
								</div>
							);
						})}
					</Grid>
				</Collapsible>
				<Collapsible title="Languages">
					<Grid>
						{languages.map(({ label, description, rating }) => (
							<div key={`language-${label}`} className="relative flex items-center py-1 rounded-lg gap-x-2">
								<div className="relative flex items-center gap-x-2">
									<p className="text-sm md:text-base text-zinc-100">
										{label} <span className="text-xs md:text-md text-zinc-300">({description})</span>
									</p>
									<Stars rating={rating} />
								</div>
							</div>
						))}
					</Grid>
				</Collapsible>
				<p className="text-xs md:text-sm">
					If you want to know more,&nbsp;
					<a href={LINKEDIN_SKILLS_URL} target="_blank" className="text-indigo-300 hover:text-indigo-200">
						click here
					</a>
				</p>
			</GridContainer>
		</>
	);
}
