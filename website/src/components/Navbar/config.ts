import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { BiSolidCertification } from 'react-icons/bi';
import { FaWarehouse } from 'react-icons/fa6';
import { BriefcaseIcon, NewspaperIcon, AcademicCapIcon } from '@heroicons/react/20/solid';
import * as paths from '../../constants/paths';

export const navigation = [
	{ name: 'About me', href: paths.ABOUT, Icon: NewspaperIcon, useLink: true },
	{ name: 'Academic', href: paths.ACADEMIC, Icon: AcademicCapIcon, useLink: true },
	{ name: 'Jobs', href: paths.JOBS, Icon: BriefcaseIcon, useLink: true },
	{ name: 'Skills', href: paths.SKILLS, Icon: GiSkills, useLink: true },
	{ name: 'Projects', href: paths.PROJECTS, Icon: GrProjects, useLink: true },
	{ name: 'Licenses & Certifications', href: paths.CERTIFICATIONS, Icon: BiSolidCertification, useLink: true },
	{ name: 'Warehouse', href: paths.WAREHOUSE, Icon: FaWarehouse, useLink: true },
];