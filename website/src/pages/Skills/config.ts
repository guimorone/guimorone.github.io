import { sortByTitleOrLabelFunction, sortByRatingFunction } from '../../utils';
import * as skillsDefinitions from '../../constants/skills';
import type { SkillType, LanguageSkillType } from '../../@types';

export const title: string = 'Skills';
export const subtitle: string =
	'Here I show you my expertise in programming languages, frameworks and other technologies, based on time of experience and in how much I used in my projects through life.';

export const skills: SkillType[] = [
	skillsDefinitions.AIRFLOW,
	skillsDefinitions.AWS,
	skillsDefinitions.BASH,
	skillsDefinitions.C,
	skillsDefinitions.CONSTRUCT_3,
	skillsDefinitions.CI_CD,
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
	skillsDefinitions.JEST,
	skillsDefinitions.JQUERY,
	skillsDefinitions.JUPYTER_NOTEBOOKS,
	skillsDefinitions.KUBERNETES,
	skillsDefinitions.LINUX,
	skillsDefinitions.MONGODB,
	skillsDefinitions.NODE,
	skillsDefinitions.POSTGRESQL,
	skillsDefinitions.POWERSHELL,
	skillsDefinitions.PYTHON,
	skillsDefinitions.REACT,
	skillsDefinitions.REACT_NATIVE,
	skillsDefinitions.REACT_REDUX,
	skillsDefinitions.RUBY,
	skillsDefinitions.SQL,
	skillsDefinitions.TAILWIND_CSS,
	skillsDefinitions.TERRAFORM,
	skillsDefinitions.TYPESCRIPT,
	skillsDefinitions.VUE,
	skillsDefinitions.WEBPACK,
]
	.sort(sortByTitleOrLabelFunction)
	.sort(sortByRatingFunction);

export const languages: LanguageSkillType[] = [
	{ label: 'Portuguese', description: 'Native', rating: 5 as const },
	{ label: 'English', description: 'Advanced', rating: 4 as const },
	{ label: 'German', description: 'Beginner', rating: 1 as const },
]
	.sort(sortByTitleOrLabelFunction)
	.sort(sortByRatingFunction);
