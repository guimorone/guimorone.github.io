import { experiences as AcademicExperiences } from '../pages/Academic/config';
import { experiences as JobsExperiences, freelances as FreelancesExperiences } from '../pages/Jobs/config';
import { projects as ProjectsExperiences } from '../pages/Projects/config';
import { coursesAndCertifications as CoursesCertificationsExperiences } from '../pages/Certifications/config';
import { DEFAULT_DOCUMENT_TITLE } from '../constants';
import type { ActivityType, GenericData } from '../@types';

export const classNames = (...classes: any[]): string => classes.filter(Boolean).join(' ');

export const checkIfObjectIsEmpty = (obj: object): boolean =>
	!obj || (!Object.keys(obj).length && Object.getPrototypeOf(obj) === Object.prototype);

function capitalizeString(str: string): string {
	const firstChar = str.charAt(0).toUpperCase();
	const remainingChars = str.slice(1);

	return `${firstChar}${remainingChars}`;
}

export const getDocumentTitle = (pathname: string, separator: string = ' | '): string =>
	capitalizeString(pathname.slice(1)) + separator + DEFAULT_DOCUMENT_TITLE;

export function sortByTitleOrLabelFunction(e1: GenericData, e2: GenericData): number {
	const element1: string = e1?.title !== undefined ? e1.title : e1.label;
	const element2: string = e2?.title !== undefined ? e2.title : e2.label;

	return element1 > element2 ? 1 : element2 > element1 ? -1 : 0;
}

export function sortByRatingFunction(e1: GenericData, e2: GenericData): number {
	if (!('rating' in e1) || !('rating' in e2)) return 0;

	return e1.rating > e2.rating ? -1 : e2.rating > e1.rating ? 1 : 0;
}

export function getSkillData(skillLabel: string): {
	Academic?: ActivityType[];
	Jobs?: ActivityType[];
	Freelances?: ActivityType[];
	Projects?: ActivityType[];
	'Courses & Certifications'?: ActivityType[];
} {
	const works: (keyof typeof skillData)[] = [
		'Academic',
		'Jobs',
		'Freelances',
		'Projects',
		'Courses & Certifications',
	];
	const skillData: { [key: string]: ActivityType[] } = {};

	const checkExperience = (experience: ActivityType): boolean => {
		const skills = experience?.skills?.filter(skill => skill.label === skillLabel);

		if (!skills || skills.length === 0) return false;
		return true;
	};

	works.forEach(work => {
		let experiences: ActivityType[] = [];

		switch (work) {
			case 'Academic':
				experiences = AcademicExperiences.filter(checkExperience);
				if (experiences.length > 0) skillData[work] = experiences;
				break;
			case 'Jobs':
				experiences = JobsExperiences.filter(checkExperience);
				if (experiences.length > 0) skillData[work] = experiences;
				break;
			case 'Freelances':
				experiences = FreelancesExperiences.filter(checkExperience);
				if (experiences.length > 0) skillData[work] = experiences;
				break;
			case 'Projects':
				experiences = ProjectsExperiences.filter(checkExperience);
				if (experiences.length > 0) skillData[work] = experiences;
				break;
			case 'Courses & Certifications':
				experiences = CoursesCertificationsExperiences.filter(checkExperience);
				if (experiences.length > 0) skillData[work] = experiences;
				break;
		}
	});

	return skillData;
}
