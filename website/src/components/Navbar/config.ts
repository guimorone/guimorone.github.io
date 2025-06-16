import { AcademicCapIcon, BriefcaseIcon, NewspaperIcon } from '@heroicons/react/20/solid';
import { BiSolidCertification } from 'react-icons/bi';
import { FaWarehouse } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';

import * as paths from '../../constants/paths';

import type { NavigationType } from '../../@types';

export const navigation: NavigationType[] = [
	{ name: 'About', href: paths.ABOUT, Icon: NewspaperIcon, useLink: true },
	{ name: 'Academic', href: paths.ACADEMIC, Icon: AcademicCapIcon, useLink: true },
	{ name: 'Jobs', href: paths.JOBS, Icon: BriefcaseIcon, useLink: true },
	{ name: 'Projects', href: paths.PROJECTS, Icon: GrProjects, useLink: true },
	{ name: 'Courses & Certifications', href: paths.CERTIFICATIONS, Icon: BiSolidCertification, useLink: true },
	{ name: 'Skills', href: paths.SKILLS, Icon: GiSkills, useLink: true },
	{ name: 'Warehouse', href: paths.WAREHOUSE, Icon: FaWarehouse, useLink: true },
];
