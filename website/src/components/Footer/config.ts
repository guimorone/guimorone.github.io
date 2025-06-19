import { CodeBracketIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { GITHUB, LINKEDIN, MAILTO_URL, WEBSITE_CODE_URL } from '../../constants/urls';
import { GitHubIcon, LinkedInIcon } from '../../utils/icons';
import type { NavigationType } from '../../@types';

export const navigation: NavigationType[] = [
	{ name: 'GitHub', href: GITHUB, target: '_blank', Icon: GitHubIcon },
	{ name: 'LinkedIn', href: LINKEDIN, target: '_blank', Icon: LinkedInIcon },
	{ name: 'E-mail', href: MAILTO_URL, Icon: EnvelopeIcon },
	{ name: 'Source Code', href: WEBSITE_CODE_URL, target: '_blank', Icon: CodeBracketIcon },
];
