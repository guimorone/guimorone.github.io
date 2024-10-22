import Page from '../../components/Page';
import { title, subtitle, experiences, freelances } from './config';

export default function Jobs() {
	const activities = { Jobs: experiences, Freelances: freelances };

	return <Page title={title} subtitle={subtitle} activities={activities} />;
}
