import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import {
	FaPython,
	FaReact,
	FaDocker,
	FaGitAlt,
	FaJava,
	FaNodeJs,
	FaGolang,
	FaHtml5,
	FaCss3Alt,
	FaAws,
	FaC,
	FaLinux,
} from 'react-icons/fa6';
import { FcLinux } from 'react-icons/fc';
import {
	SiDjango,
	SiCplusplus,
	SiCyberdefenders,
	SiJavascript,
	SiTypescript,
	SiFlask,
	SiJquery,
	SiMongodb,
	SiHaskell,
	SiGraphql,
	SiConstruct3,
	SiFlutter,
	SiJupyter,
	SiWebpack,
	SiVuedotjs,
	SiFastapi,
	SiApacheairflow,
	SiTerraform,
	SiGithub,
	SiTailwindcss,
	SiRedux,
	SiJest,
	SiKubernetes,
	SiDart,
} from 'react-icons/si';
import { DiGoogleCloudPlatform, DiRuby } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandReactNative, TbSql, TbBrandPowershell, TbBrandCSharp } from 'react-icons/tb';
import { VscTerminalBash } from 'react-icons/vsc';
import type { SkillType } from '../@types';

export const AIRFLOW: SkillType = {
	Icon: { Element: SiApacheairflow, color: 'text-[#FF7557]' },
	label: 'Airflow',
	rating: 3.5,
};
export const AWS: SkillType = { Icon: { Element: FaAws, color: 'text-[#FF9900]' }, label: 'AWS', rating: 4 };
export const BASH: SkillType = { Icon: { Element: VscTerminalBash }, label: 'Bash', rating: 4 };
export const C: SkillType = { Icon: { Element: FaC, color: 'text-[#5D6BC1]' }, label: 'C', rating: 2.5 };
export const CONSTRUCT_3: SkillType = {
	Icon: { Element: SiConstruct3, color: 'text-[#DAE8F6]' },
	label: 'Construct 3',
	rating: 2,
};
export const CI_CD: SkillType = { Icon: { Element: AiOutlineDeploymentUnit }, label: 'CI/CD', rating: 5 };
export const CPP: SkillType = {
	Icon: { Element: SiCplusplus, color: 'text-[#659BD3]' },
	label: 'C++',
	rating: 2.5,
};
export const CSHARP: SkillType = {
	Icon: { Element: TbBrandCSharp, color: 'text-[#9A4F96]' },
	label: 'C#',
	rating: 1,
};
export const CSS: SkillType = { Icon: { Element: FaCss3Alt, color: 'text-[#28A9DF]' }, label: 'CSS', rating: 3.5 };
export const CYBER_SECURITY: SkillType = {
	Icon: { Element: SiCyberdefenders },
	label: 'Cyber Security',
	rating: 1,
};
export const DART: SkillType = { Icon: { Element: SiDart, color: 'text-[#0175C9]' }, label: 'Dart', rating: 3 };
export const DJANGO: SkillType = {
	Icon: { Element: SiDjango, color: 'text-[#0A2F20]' },
	label: 'Django',
	rating: 5,
};
export const DOCKER: SkillType = {
	Icon: { Element: FaDocker, color: 'text-[#0091E2]' },
	label: 'Docker',
	rating: 5,
};
export const FASTAPI: SkillType = {
	Icon: { Element: SiFastapi, color: 'text-[#04978A]' },
	label: 'FastAPI',
	rating: 5,
};
export const FLASK: SkillType = { Icon: { Element: SiFlask }, label: 'Flask', rating: 5 };
export const FLUTTER: SkillType = {
	Icon: { Element: SiFlutter, color: 'text-[#54C4F8]' },
	label: 'Flutter',
	rating: 3,
};
export const GCP: SkillType = {
	Icon: { Element: DiGoogleCloudPlatform, color: 'text-[#2FA1FB]' },
	label: 'GCP',
	rating: 3.5,
};
export const GIT: SkillType = { Icon: { Element: FaGitAlt, color: 'text-[#F05033]' }, label: 'Git', rating: 4 };
export const GITHUB: SkillType = { Icon: { Element: SiGithub }, label: 'GitHub', rating: 5 };
export const GO: SkillType = { Icon: { Element: FaGolang, color: 'text-[#05ACD7]' }, label: 'Go', rating: 4 };
export const GRAPHQL: SkillType = {
	Icon: { Element: SiGraphql, color: 'text-[#E534AB]' },
	label: 'GraphQL',
	rating: 3.5,
};
export const HASKELL: SkillType = {
	Icon: { Element: SiHaskell, color: 'text-[#999999]' },
	label: 'Haskell',
	rating: 1,
};
export const HTML: SkillType = { Icon: { Element: FaHtml5, color: 'text-[#E54C25]' }, label: 'HTML', rating: 5 };
export const JAVA: SkillType = { Icon: { Element: FaJava, color: 'text-[#EB2F2E]' }, label: 'Java', rating: 2.5 };
export const JAVASCRIPT: SkillType = {
	Icon: { Element: SiJavascript, color: 'text-[#F7DF1C]' },
	label: 'JavaScript',
	rating: 5,
};
export const JEST: SkillType = {
	Icon: { Element: SiJest, color: 'text-[#C63D14]' },
	label: 'Jest',
	rating: 1,
};
export const JQUERY: SkillType = {
	Icon: { Element: SiJquery, color: 'text-[#0C68AC]' },
	label: 'JQuery',
	rating: 3,
};
export const JUPYTER_NOTEBOOKS: SkillType = {
	Icon: { Element: SiJupyter, color: 'text-[#F47820]' },
	label: 'Jupyter Notebooks',
	rating: 5,
};
export const LINUX: SkillType = {
	Icon: { Element: { withColor: FcLinux, withoutColor: FaLinux } },
	label: 'Linux',
	rating: 3.5,
};
export const KUBERNETES: SkillType = {
	Icon: { Element: SiKubernetes, color: 'text-[#326DE6]' },
	label: 'Kubernetes',
	rating: 1,
};
export const MONGODB: SkillType = {
	Icon: { Element: SiMongodb, color: 'text-[#05AC4E]' },
	label: 'MongoDB',
	rating: 3,
};
export const NODE: SkillType = { Icon: { Element: FaNodeJs, color: 'text-[#90C43F]' }, label: 'Node', rating: 4 };
export const POSTGRESQL: SkillType = {
	Icon: { Element: BiLogoPostgresql, color: 'text-[#306793]' },
	label: 'PostgreSQL',
	rating: 3.5,
};
export const POWERSHELL: SkillType = {
	Icon: { Element: TbBrandPowershell, color: 'text-[#2671BE]' },
	label: 'PowerShell',
	rating: 3.5,
};
export const PYTHON: SkillType = {
	Icon: { Element: FaPython, color: 'text-[#326FA0]' },
	label: 'Python',
	rating: 5,
};
export const REACT: SkillType = {
	Icon: { Element: FaReact, color: 'text-[#61DBFB]' },
	label: 'React',
	rating: 5,
};
export const REACT_NATIVE: SkillType = {
	Icon: { Element: TbBrandReactNative, color: 'text-[#61DBFB]' },
	label: 'React Native',
	rating: 3.5,
};
export const REACT_REDUX: SkillType = {
	Icon: { Element: SiRedux, color: 'text-[#764ABC]' },
	label: 'React Redux',
	rating: 4,
};
export const RUBY: SkillType = { Icon: { Element: DiRuby, color: 'text-[#9D0401]' }, label: 'Ruby', rating: 1 };
export const SQL: SkillType = { Icon: { Element: TbSql, color: 'text-[#0279D6]' }, label: 'SQL', rating: 3 };
export const TAILWIND_CSS: SkillType = {
	Icon: { Element: SiTailwindcss, color: 'text-[#09B9D8]' },
	label: 'Tailwind CSS',
	rating: 5,
};
export const TERRAFORM: SkillType = {
	Icon: { Element: SiTerraform, color: 'text-[#7B42BC]' },
	label: 'Terraform',
	rating: 4,
};
export const TYPESCRIPT: SkillType = {
	Icon: { Element: SiTypescript, color: 'text-[#2E79C7]' },
	label: 'TypeScript',
	rating: 5,
};
export const VUE: SkillType = { Icon: { Element: SiVuedotjs, color: 'text-[#3EB984]' }, label: 'Vue', rating: 2 };
export const WEBPACK: SkillType = {
	Icon: { Element: SiWebpack, color: 'text-[#8ED6FB]' },
	label: 'Webpack',
	rating: 1.5,
};
