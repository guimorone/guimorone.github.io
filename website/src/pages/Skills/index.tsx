import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Grid from '../../components/Grid';
import GridContainer from '../../components/Grid/Container';
import Collapsable from '../../components/Collapsable';
import Modal from '../../components/Modal';
import Stars from '../../components/Stars';
import ObjectFeed from '../../components/Feed/ObjectFeed';
import { title, subtitle, skills, languages } from './config';
import { classNames, getSkillData, checkIfObjectIsEmpty } from '../../utils';
import { LINKEDIN_SKILLS_URL } from '../../constants/urls';
import type { SkillType } from '../../@types';

export default function Skills() {
	const [currentSkill, setCurrentSkill] = useState<SkillType | null>(null);
	const paramRef = useRef<HTMLDivElement>(null);
	const [searchParams, _] = useSearchParams();

	const skillSearchParam = searchParams.get('skill');

	useEffect(() => {
		if (!paramRef.current || !skillSearchParam) return;

		paramRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}, [skillSearchParam]);

	const onOpenModal = (skill: SkillType) => setCurrentSkill(skill);
	const onCloseModal = () => setCurrentSkill(null);

	const skillData = getSkillData(currentSkill?.label ?? '');
	const modalIcon =
		typeof currentSkill?.Icon.Element === 'object'
			? currentSkill?.Icon.Element.withoutColor
			: currentSkill?.Icon.Element;
	const modalTitle = currentSkill ? `Experiences with ${currentSkill.label}` : 'Closing Modal';
	const modalSubtitle = currentSkill ? `Skill Level: ${currentSkill?.rating} stars` : 'Closing Modal';

	return (
		<>
			<Modal
				open={!!currentSkill}
				onClose={onCloseModal}
				Icon={modalIcon}
				title={modalTitle}
				subtitle={modalSubtitle}
			>
				<div className="space-y-8">
					{checkIfObjectIsEmpty(skillData) ? (
						<>
							{currentSkill ? (
								<h4 className="text-base">Only during graduation.</h4>
							) : (
								<h4 className="text-base text-red-300">Nothing to show.</h4>
							)}
						</>
					) : (
						Object.keys(skillData).map((topic, index) => (
							<ObjectFeed
								key={`skills-modal-${topic}-${index}`}
								title={topic}
								activities={skillData[topic as keyof typeof skillData] ?? []}
								currentSkill={currentSkill?.label ?? undefined}
							/>
						))
					)}
				</div>
			</Modal>
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
									<p className="text-sm md:text-base text-zinc-100">{skill.label}</p>
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
