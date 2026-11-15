import { useState } from 'react';
import ObjectFeed from '@/components/Feed/ObjectFeed';
import Modal from '@/components/Modal';
import { checkIfObjectIsEmpty, getSkillData } from '@/utils';
import type { FC } from 'react';
import type { SkillType } from '@/types';
import type { SkillDescriptionProps } from '@/types/components';

const SkillDescription: FC<SkillDescriptionProps> = ({ currentSkill, onClose }) => {
	const [shownSkill, setShownSkill] = useState<SkillType | null>(null);

	if (currentSkill && currentSkill !== shownSkill) setShownSkill(currentSkill);

	const modalIcon =
		typeof shownSkill?.Icon.Element === 'object' ? shownSkill.Icon.Element.withoutColor : shownSkill?.Icon.Element;
	const skillData = shownSkill ? getSkillData(shownSkill.label) : {};

	return (
		<Modal
			open={!!currentSkill}
			onClose={onClose}
			Icon={modalIcon}
			title={shownSkill ? `Experiences with ${shownSkill.label}` : ''}
			subtitle={shownSkill ? `Skill Level: ${shownSkill.rating} ${shownSkill.rating === 1 ? 'star' : 'stars'}` : ''}
		>
			{shownSkill && (
				<div className="space-y-8">
					{checkIfObjectIsEmpty(skillData) ? (
						<h4 className="text-base">Only during graduation or reading articles/books.</h4>
					) : (
						Object.keys(skillData).map(topic => (
							<ObjectFeed
								key={`skills-modal-${topic}`}
								title={topic}
								activities={skillData[topic as keyof typeof skillData] ?? []}
								currentSkill={shownSkill.label}
							/>
						))
					)}
				</div>
			)}
		</Modal>
	);
};

export default SkillDescription;
