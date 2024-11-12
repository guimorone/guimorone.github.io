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
	SiCsharp,
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
	SiPowershell,
	SiTailwindcss,
} from 'react-icons/si';
import { DiGoogleCloudPlatform, DiRuby } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandReactNative, TbSql } from 'react-icons/tb';
import { VscTerminalBash } from 'react-icons/vsc';
import type { IconType } from '../../@types/icons';

export const title: string = 'Skills';
export const subtitle: string =
	'Here I show you my expertise in programming languages, frameworks and other technologies, based on time of experience and in how much I used in my projects through life.';

export const skills: { Icon: { Element: IconType; color?: string }; label: string; rating: number }[] = [
	{ Icon: { Element: SiDjango, color: 'text-[#0A2F20]' }, label: 'Django', rating: 5 },
	{ Icon: { Element: FaReact, color: 'text-[#61DBFB]' }, label: 'React', rating: 5 },
	{ Icon: { Element: FaPython, color: 'text-[#326FA0]' }, label: 'Python', rating: 5 },
	{ Icon: { Element: SiJavascript, color: 'text-[#F7DF1C]' }, label: 'JavaScript', rating: 5 },
	{ Icon: { Element: SiTypescript, color: 'text-[#2E79C7]' }, label: 'TypeScript', rating: 5 },
	{ Icon: { Element: FaC, color: 'text-[#5D6BC1]' }, label: 'C', rating: 3 },
	{ Icon: { Element: SiCplusplus, color: 'text-[#659BD3]' }, label: 'C++', rating: 3 },
	{ Icon: { Element: FaDocker, color: 'text-[#0091E2]' }, label: 'Docker', rating: 4 },
	{ Icon: { Element: FaGitAlt, color: 'text-[#F05033]' }, label: 'Git', rating: 4 },
	{ Icon: { Element: FaJava, color: 'text-[#EB2F2E]' }, label: 'Java', rating: 2 },
	{ Icon: { Element: SiFlask }, label: 'Flask', rating: 5 },
	{ Icon: { Element: TbBrandReactNative, color: 'text-[#61DBFB]' }, label: 'React Native', rating: 4 },
	{ Icon: { Element: FaNodeJs, color: 'text-[#90C43F]' }, label: 'Node', rating: 4 },
	{ Icon: { Element: FaGolang, color: 'text-[#05ACD7]' }, label: 'Go', rating: 2 },
	{ Icon: { Element: FaHtml5, color: 'text-[#E54C25]' }, label: 'HTML', rating: 5 },
	{ Icon: { Element: FaCss3Alt, color: 'text-[#28A9DF]' }, label: 'CSS', rating: 4 },
	{ Icon: { Element: FcLinux }, label: 'Linux', rating: 3 },
	{ Icon: { Element: SiJquery, color: 'text-[#0C68AC]' }, label: 'JQuery', rating: 3 },
	{ Icon: { Element: TbSql, color: 'text-[#0279D6]' }, label: 'SQL', rating: 3 },
	{ Icon: { Element: BiLogoPostgresql, color: 'text-[#306793]' }, label: 'PostgreSQL', rating: 3 },
	{ Icon: { Element: SiMongodb, color: 'text-[#05AC4E]' }, label: 'MongoDB', rating: 3 },
	{ Icon: { Element: FaAws, color: 'text-[#FF9900]' }, label: 'AWS', rating: 3 },
	{ Icon: { Element: DiGoogleCloudPlatform, color: 'text-[#2FA1FB]' }, label: 'GCP', rating: 2 },
	{ Icon: { Element: SiHaskell, color: 'text-[#999999]' }, label: 'Haskell', rating: 2 },
	{ Icon: { Element: DiRuby, color: 'text-[#9D0401]' }, label: 'Ruby', rating: 1 },
	{ Icon: { Element: SiCsharp, color: 'text-[#9A4F96]' }, label: 'C#', rating: 1 },
	{ Icon: { Element: SiConstruct3, color: 'text-[#DAE8F6]' }, label: 'Construct 3', rating: 3 },
	{ Icon: { Element: SiFlutter, color: 'text-[#54C4F8]' }, label: 'Flutter', rating: 3 },
	{ Icon: { Element: SiJupyter, color: 'text-[#F47820]' }, label: 'Jupyter Notebooks', rating: 5 },
	{ Icon: { Element: SiWebpack, color: 'text-[#8ED6FB]' }, label: 'Webpack', rating: 2 },
	{ Icon: { Element: SiVuedotjs, color: 'text-[#3EB984]' }, label: 'Vue', rating: 2 },
	{ Icon: { Element: SiFastapi, color: 'text-[#04978A]' }, label: 'FastAPI', rating: 5 },
	{ Icon: { Element: SiApacheairflow, color: 'text-[#FF7557]' }, label: 'Airflow', rating: 3 },
	{ Icon: { Element: SiTerraform, color: 'text-[#7B42BC]' }, label: 'Terraform', rating: 3 },
	{ Icon: { Element: SiGithub }, label: 'GitHub', rating: 5 },
	{ Icon: { Element: VscTerminalBash }, label: 'Bash', rating: 4 },
	{ Icon: { Element: SiPowershell, color: 'text-[#2671BE]' }, label: 'PowerShell', rating: 3 },
	{ Icon: { Element: SiTailwindcss, color: 'text-[#09B9D8]' }, label: 'Tailwind CSS', rating: 5 },
	{ Icon: { Element: SiCyberdefenders }, label: 'Cyber Security', rating: 1 },
	{ Icon: { Element: SiGraphql, color: 'text-[#E534AB]' }, label: 'GraphQL', rating: 3 },
]
	.sort((s1, s2) => (s1.label > s2.label ? 1 : s2.label > s1.label ? -1 : 0))
	.sort((s1, s2) => s2.rating - s1.rating);

export const languages: { label: string; description: string; rating: number }[] = [
	{ label: 'Portuguese', description: 'Native', rating: 5 },
	{ label: 'English', description: 'Advanced', rating: 4 },
	{ label: 'German', description: 'Beginner', rating: 1 },
]
	.sort((s1, s2) => (s1.label > s2.label ? 1 : s2.label > s1.label ? -1 : 0))
	.sort((s1, s2) => s2.rating - s1.rating);
