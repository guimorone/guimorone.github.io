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

export default function Skills() {
	const [currentSkill, setCurrentSkill] = useState<string | null>(null);
	const paramRef = useRef<HTMLDivElement>(null);
	const [searchParams, _] = useSearchParams();

	const skill = searchParams.get('skill');

	useEffect(() => {
		if (!paramRef.current || !skill) return;

		paramRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}, [skill]);

	const onOpenModal = (skillLabel: string) => setCurrentSkill(skillLabel);
	const onCloseModal = () => setCurrentSkill(null);

	const skillData = getSkillData(currentSkill ?? '');

	return (
		<>
			<Modal
				open={!!currentSkill}
				onClose={onCloseModal}
				title={currentSkill ? `Experiences with ${currentSkill}` : 'Closing Modal'}
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
								currentSkill={currentSkill ?? undefined}
							/>
						))
					)}
				</div>
			</Modal>
			<GridContainer title={title} subtitle={subtitle}>
				<Collapsable title="Tools">
					<Grid>
						{skills?.map(({ Icon, label, rating }, index) => (
							<div
								key={`skill-${label}-${index}`}
								ref={skill?.toLowerCase() === label.toLowerCase() ? paramRef : null}
								className="relative flex items-center py-1 rounded-lg gap-x-2 group"
							>
								<button
									type="button"
									onClick={() => onOpenModal(label)}
									className={classNames(
										skill?.toLowerCase() === label.toLowerCase() && 'bg-zinc-900',
										'absolute inset-0 -mx-2 -my-1 rounded-lg group-hover:bg-zinc-800 group-active:bg-zinc-900'
									)}
								/>
								<button
									type="button"
									onClick={() => onOpenModal(label)}
									className="relative flex items-center gap-x-2"
								>
									{typeof Icon.Element === 'object' ? (
										<Icon.Element.withColor className="w-auto h-4 sm:h-5 md:h-6" aria-hidden="true" />
									) : (
										<Icon.Element
											className={classNames(Icon.color, 'w-auto h-4 sm:h-5 md:h-6')}
											aria-hidden="true"
										/>
									)}
									<p className="text-sm md:text-base text-zinc-100">{label}</p>
									<Stars rating={rating} />
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
								ref={skill?.toLowerCase() === label.toLowerCase() ? paramRef : null}
								className="relative flex items-center py-1 rounded-lg gap-x-2"
							>
								{skill?.toLowerCase() === label.toLowerCase() && (
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
