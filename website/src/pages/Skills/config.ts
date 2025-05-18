import { sortByTitleOrLabelFunction } from '../../utils';
import * as skillsDefinitions from '../../constants/skills';
import type { SkillType } from '../../@types';

export const title: string = 'Skills';
export const subtitle: string =
	'Here I show you my expertise in programming languages, frameworks and other technologies, based on time of experience and in how much I used in my projects through life.';

export const skills: SkillType[] = [
	skillsDefinitions.AIRFLOW,
	skillsDefinitions.AWS,
	skillsDefinitions.BASH,
	skillsDefinitions.C,
	skillsDefinitions.CONSTRUCT_3,
	skillsDefinitions.CPP,
	skillsDefinitions.CSHARP,
	skillsDefinitions.CSS,
	skillsDefinitions.CYBER_SECURITY,
	skillsDefinitions.DJANGO,
	skillsDefinitions.DOCKER,
	skillsDefinitions.FASTAPI,
	skillsDefinitions.FLASK,
	skillsDefinitions.FLUTTER,
	skillsDefinitions.GCP,
	skillsDefinitions.GIT,
	skillsDefinitions.GITHUB,
	skillsDefinitions.GO,
	skillsDefinitions.GRAPHQL,
	skillsDefinitions.HASKELL,
	skillsDefinitions.HTML,
	skillsDefinitions.JAVA,
	skillsDefinitions.JAVASCRIPT,
	skillsDefinitions.JQUERY,
	skillsDefinitions.JUPYTER_NOTEBOOKS,
	skillsDefinitions.LINUX,
	skillsDefinitions.MONGODB,
	skillsDefinitions.NODE,
	skillsDefinitions.POSTGRESQL,
	skillsDefinitions.POWERSHELL,
	skillsDefinitions.PYTHON,
	skillsDefinitions.REACT,
	skillsDefinitions.REACT_NATIVE,
	skillsDefinitions.RUBY,
	skillsDefinitions.SQL,
	skillsDefinitions.TAILWIND_CSS,
	skillsDefinitions.TERRAFORM,
	skillsDefinitions.TYPESCRIPT,
	skillsDefinitions.VUE,
	skillsDefinitions.WEBPACK,
]
	.sort(sortByTitleOrLabelFunction)
	.sort((s1, s2) => s2.rating - s1.rating);

export const languages: { label: string; description: string; rating: number }[] = [
	{ label: 'Portuguese', description: 'Native', rating: 5 },
	{ label: 'English', description: 'Advanced', rating: 4 },
	{ label: 'German', description: 'Beginner', rating: 1 },
]
	.sort(sortByTitleOrLabelFunction)
	.sort((s1, s2) => s2.rating - s1.rating);
