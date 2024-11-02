import { GlobeAltIcon, EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/20/solid';
import { InstagramIcon, GitHubIcon, LinkedInIcon } from '../../utils/icons';
import { INSTAGRAM, GITHUB, LINKEDIN, CODEVOLVELABS, MAILTO_URL, WEBSITE_CODE_URL } from '../../constants/urls';
import type { NavigationType } from '../../@types';

export const navigation: NavigationType[] = [
	{ name: 'Instagram', href: INSTAGRAM, target: '_blank', Icon: InstagramIcon },
	{ name: 'GitHub', href: GITHUB, target: '_blank', Icon: GitHubIcon },
	{ name: 'LinkedIn', href: LINKEDIN, target: '_blank', Icon: LinkedInIcon },
	{ name: 'Codevolve Labs', href: CODEVOLVELABS, target: '_blank', Icon: GlobeAltIcon },
	{ name: 'E-mail', href: MAILTO_URL, Icon: EnvelopeIcon },
	{ name: 'Source Code', href: WEBSITE_CODE_URL, target: '_blank', Icon: CodeBracketIcon },
];
