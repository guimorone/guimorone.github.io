import * as skillsDefinitions from '@/constants/skills';
import { sortByRatingFunction, sortByTitleOrLabelFunction } from '@/utils';
import type { LanguageSkillType, SkillType } from '@/types';

export const title: string = 'Skills';
export const subtitle: string =
	"Here I show an overview of my expertise with programming languages, frameworks, software tools, and other technologies, reflecting years of hands-on experience and how frequently I've used them across real projects.";

export const skills: SkillType[] = [
	skillsDefinitions.AIRFLOW,
	skillsDefinitions.AWS,
	skillsDefinitions.BASH,
	skillsDefinitions.BITBUCKET,
	skillsDefinitions.C,
	skillsDefinitions.CONSTRUCT_3,
	skillsDefinitions.CI_CD,
	skillsDefinitions.CPP,
	skillsDefinitions.CSHARP,
	skillsDefinitions.CSS,
	skillsDefinitions.CYBER_SECURITY,
	skillsDefinitions.DART,
	skillsDefinitions.DJANGO,
	skillsDefinitions.DOCKER,
	skillsDefinitions.ELASTICSEARCH,
	skillsDefinitions.FASTAPI,
	skillsDefinitions.FLASK,
	skillsDefinitions.FLUTTER,
	skillsDefinitions.GCP,
	skillsDefinitions.GIT,
	skillsDefinitions.GITHUB,
	skillsDefinitions.GO,
	skillsDefinitions.GRAFANA,
	skillsDefinitions.GRAPHQL,
	skillsDefinitions.HASKELL,
	skillsDefinitions.HTML,
	skillsDefinitions.JAVA,
	skillsDefinitions.JAVASCRIPT,
	skillsDefinitions.JEST,
	skillsDefinitions.JIRA,
	skillsDefinitions.JQUERY,
	skillsDefinitions.JUPYTER_NOTEBOOKS,
	skillsDefinitions.KUBERNETES,
	skillsDefinitions.LINUX,
	skillsDefinitions.MONGODB,
	skillsDefinitions.NODE,
	skillsDefinitions.POSTGRESQL,
	skillsDefinitions.MY_SQL,
	skillsDefinitions.POWERSHELL,
	skillsDefinitions.PYTHON,
	skillsDefinitions.REACT,
	skillsDefinitions.REACT_NATIVE,
	skillsDefinitions.REACT_REDUX,
	skillsDefinitions.RPA,
	skillsDefinitions.RUBY,
	skillsDefinitions.SENTRY,
	skillsDefinitions.SQL,
	skillsDefinitions.TAILWIND_CSS,
	skillsDefinitions.TERRAFORM,
	skillsDefinitions.TYPESCRIPT,
	skillsDefinitions.VUE,
]
	.sort(sortByTitleOrLabelFunction)
	.sort(sortByRatingFunction);

export const languages: LanguageSkillType[] = [
	{ label: 'Portuguese', description: 'Native', rating: 5 },
	{ label: 'English', description: 'Advanced', rating: 4 },
	{ label: 'German', description: 'Beginner', rating: 1 },
]
	.sort(sortByTitleOrLabelFunction)
	.sort(sortByRatingFunction);
