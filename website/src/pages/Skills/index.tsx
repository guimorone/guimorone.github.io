import { Rating } from 'flowbite-react';
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
	SiJavascript,
	SiTypescript,
	SiFlask,
	SiJquery,
	SiMongodb,
	SiHaskell,
	SiCsharp,
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
import { classNames } from '../../utils';
import { LINKEDIN_SKILLS_URL } from '../../constants/urls';

export default function Skills() {
	const title = 'Skills';
	const subtitle =
		'Here I show you my expertise in programming languages, frameworks and other technologies, based on time of experience and in how much I used in my projects through life.';

	const skills = [
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
	]
		.sort((s1, s2) => (s1.label > s2.label ? 1 : s2.label > s1.label ? -1 : 0))
		.sort((s1, s2) => s2.rating - s1.rating);

	const languages = [
		{ label: 'Portuguese', description: 'Native', rating: 5 },
		{ label: 'English', description: 'Advanced', rating: 4 },
		{ label: 'German', description: 'Beginner', rating: 1 },
	]
		.sort((s1, s2) => (s1.label > s2.label ? 1 : s2.label > s1.label ? -1 : 0))
		.sort((s1, s2) => s2.rating - s1.rating);

	return (
		<div className="flex flex-col gap-y-12">
			<div className="flex flex-col -gap-1 text-left max-w-xl lg:max-w-3xl gap-y-6">
				<h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{title}</h2>
				<p className="text-base text-zinc-300 text-justify">{subtitle}</p>
			</div>
			<h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">Tools</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 self-center sm:self-auto">
				{skills?.map(({ Icon, label, rating }, index) => (
					<div key={`skill-${label}-${index}`} className="flex items-center gap-x-2">
						<Icon.Element
							className={classNames(Icon.color || 'text-zinc-100', 'w-auto h-4 sm:h-5 md:h-6')}
							aria-hidden="true"
						/>
						<p className="text-sm md:text-base text-zinc-100">{label}</p>
						<Rating size="xs" className="flex items-center md:hidden">
							<Rating.Star filled={rating >= 1} />
							<Rating.Star filled={rating >= 2} />
							<Rating.Star filled={rating >= 3} />
							<Rating.Star filled={rating >= 4} />
							<Rating.Star filled={rating >= 5} />
						</Rating>
						<Rating size="sm" className="hidden md:flex md:items-center">
							<Rating.Star filled={rating >= 1} />
							<Rating.Star filled={rating >= 2} />
							<Rating.Star filled={rating >= 3} />
							<Rating.Star filled={rating >= 4} />
							<Rating.Star filled={rating >= 5} />
						</Rating>
					</div>
				))}
			</div>
			<h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">Languages</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 self-center sm:self-auto">
				{languages?.map(({ label, description, rating }, index) => (
					<div key={`language-${label}-${index}`} className="flex items-center gap-x-2">
						<p className="text-sm md:text-base text-zinc-100">
							{label} <span className="text-xs md:text-md text-zinc-300">({description})</span>
						</p>
						<Rating size="xs" className="flex items-center md:hidden">
							<Rating.Star filled={rating >= 1} />
							<Rating.Star filled={rating >= 2} />
							<Rating.Star filled={rating >= 3} />
							<Rating.Star filled={rating >= 4} />
							<Rating.Star filled={rating >= 5} />
						</Rating>
						<Rating size="sm" className="hidden md:flex md:items-center">
							<Rating.Star filled={rating >= 1} />
							<Rating.Star filled={rating >= 2} />
							<Rating.Star filled={rating >= 3} />
							<Rating.Star filled={rating >= 4} />
							<Rating.Star filled={rating >= 5} />
						</Rating>
					</div>
				))}
			</div>
			<p className="text-xs md:text-sm">
				If you want to know more,&nbsp;
				<a href={LINKEDIN_SKILLS_URL} target="_blank" className="text-indigo-300 hover:text-indigo-200">
					click here
				</a>
			</p>
		</div>
	);
}
