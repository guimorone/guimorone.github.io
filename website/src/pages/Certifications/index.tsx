import Page from '../../components/Page';
import { title, subtitle, coursesAndCertifications } from './config';

export default function Certifications() {
	return <Page title={title} subtitle={subtitle} activities={coursesAndCertifications} />;
}
