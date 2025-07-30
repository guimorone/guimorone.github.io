import ObjectFeed from '@/components/Feed/ObjectFeed';
import Modal from '@/components/Modal';
import { checkIfObjectIsEmpty, getSkillData } from '@/utils';
import type { FC } from 'react';
import type { SkillDescriptionProps } from '@/types/components';

const SkillDescription: FC<SkillDescriptionProps> = ({ currentSkill, onClose }) => {
	const modalIcon =
		typeof currentSkill?.Icon.Element === 'object'
			? currentSkill?.Icon.Element.withoutColor
			: currentSkill?.Icon.Element;
	const modalTitle = currentSkill ? `Experiences with ${currentSkill.label}` : 'Closing Modal';
	const modalSubtitle = currentSkill
		? `Skill Level: ${currentSkill?.rating} ${currentSkill?.rating === 1 ? 'star' : 'stars'}`
		: 'Closing Modal';

	const skillData = getSkillData(currentSkill?.label ?? '');

	return (
		<Modal open={!!currentSkill} onClose={onClose} Icon={modalIcon} title={modalTitle} subtitle={modalSubtitle}>
			<div className="space-y-8">
				{checkIfObjectIsEmpty(skillData) ? (
					<>
						{currentSkill ? (
							<h4 className="text-base">Only during graduation or reading articles/books.</h4>
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
							currentSkill={currentSkill?.label}
						/>
					))
				)}
			</div>
		</Modal>
	);
};

export default SkillDescription;
