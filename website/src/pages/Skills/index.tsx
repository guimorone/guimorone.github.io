import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import Collapsable from '../../components/Collapsable';
import Grid from '../../components/Grid';
import GridContainer from '../../components/Grid/Container';
import Stars from '../../components/Stars';
import { LINKEDIN_SKILLS_URL } from '../../constants/urls';
import { classNames } from '../../utils';
import SkillDescription from './SkillDescription';
import { languages, skills, subtitle, title } from './config';

import type { SkillType } from '../../@types';

export default function Skills() {
	const [currentSkill, setCurrentSkill] = useState<SkillType | null>(null);
	const paramRef = useRef<HTMLDivElement>(null);
	const [searchParams, setSearchParams] = useSearchParams();

	const skillSearchParam = searchParams.get('skill');

	useEffect(() => window.scrollTo(0, 0), []);

	useEffect(() => {
		if (!paramRef.current || !skillSearchParam) return;

		paramRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}, [skillSearchParam]);

	const onOpenModal = (skill: SkillType): void => {
		setCurrentSkill(skill);
		setSearchParams({ skill: skill.label });
	};
	const onCloseModal = (): void => setCurrentSkill(null);

	return (
		<>
			<SkillDescription currentSkill={currentSkill} onClose={onCloseModal} />
			<GridContainer title={title} subtitle={subtitle}>
				<Collapsable title="Tools">
					<Grid>
						{skills?.map((skill, index) => (
							<div
								key={`skill-${skill.label}-${index}`}
								ref={skillSearchParam?.toLowerCase() === skill.label.toLowerCase() ? paramRef : null}
								className="relative flex items-center py-1 rounded-lg gap-x-2 group"
							>
								<button
									type="button"
									onClick={() => onOpenModal(skill)}
									className={classNames(
										skillSearchParam?.toLowerCase() === skill.label.toLowerCase() && 'bg-zinc-900',
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
						))}
					</Grid>
				</Collapsable>
				<Collapsable title="Languages">
					<Grid>
						{languages?.map(({ label, description, rating }, index) => (
							<div
								key={`language-${label}-${index}`}
								ref={skillSearchParam?.toLowerCase() === label.toLowerCase() ? paramRef : null}
								className="relative flex items-center py-1 rounded-lg gap-x-2"
							>
								{skillSearchParam?.toLowerCase() === label.toLowerCase() && (
									<div className="absolute inset-0 -mx-2 -my-1 rounded-lg bg-zinc-900" />
								)}
								<div className="relative flex items-center gap-x-2">
									<p className="text-sm md:text-base text-zinc-100">
										{label} <span className="text-xs md:text-md text-zinc-300">({description})</span>
									</p>
									<Stars rating={rating} />
								</div>
							</div>
						))}
					</Grid>
				</Collapsable>
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
