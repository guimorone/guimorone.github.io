import { DEFAULT_DOCUMENT_TITLE } from '../constants';
import { coursesAndCertifications as CoursesCertificationsExperiences } from '../pages/Certifications/config';
import { experiences as EducationExperiences } from '../pages/Education/config';
import { freelances as FreelancesExperiences, experiences as JobsExperiences } from '../pages/Jobs/config';
import { projects as ProjectsExperiences } from '../pages/Projects/config';
import type { ActivityType, GenericData, WorkPageType } from '../types';

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

export function sortByTitleOrLabelFunction(e1: GenericData, e2: GenericData): -1 | 0 | 1 {
	const element1: string = (e1.title !== undefined ? e1.title : e1.label).toLowerCase();
	const element2: string = (e2.title !== undefined ? e2.title : e2.label).toLowerCase();

	if (element1 === element2) return 0;

	return element1 > element2 ? 1 : -1;
}

export function sortByRatingFunction(e1: GenericData, e2: GenericData): -1 | 0 | 1 {
	if (!('rating' in e1) || !('rating' in e2) || e1.rating === e2.rating) return 0;

	return e1.rating > e2.rating ? -1 : 1;
}

export function getSkillData(skillLabel: string): Partial<{ [key in WorkPageType]: ActivityType[] }> {
	const works: WorkPageType[] = ['Education', 'Jobs', 'Freelances', 'Projects', 'Courses & Certifications'];
	const skillData: Partial<{ [key in WorkPageType]: ActivityType[] }> = {};

	const checkExperience = (experience: ActivityType): boolean =>
		!!experience?.skills?.find(skill => skill?.label?.toLowerCase() === skillLabel?.toLowerCase());

	works.forEach(work => {
		let experiences: ActivityType[] = [];

		switch (work) {
			case 'Education':
				experiences = EducationExperiences.filter(checkExperience);
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
