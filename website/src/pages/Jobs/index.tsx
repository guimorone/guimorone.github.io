import Page from '@/components/Page';
import { experiences, freelances, subtitle, title } from './config';

export default function Jobs() {
	const activities = { Jobs: experiences, Freelances: freelances };

	return <Page title={title} subtitle={subtitle} activities={activities} />;
}
