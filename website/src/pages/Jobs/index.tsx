import Page from '@/components/Page';
import { experiences, freelances, internships, subtitle, title } from './config';

export default function Jobs() {
	const activities = { Jobs: experiences, Internships: internships, Freelances: freelances };

	return <Page title={title} subtitle={subtitle} activities={activities} />;
}
