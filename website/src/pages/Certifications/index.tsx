import Page from '../../components/Page';
import { title, subtitle, courses_and_certifications } from './config';

export default function Certifications() {
	return <Page title={title} subtitle={subtitle} activities={courses_and_certifications} />;
}
