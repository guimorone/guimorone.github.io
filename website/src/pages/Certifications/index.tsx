import Page from '../../components/Page';
import { coursesAndCertifications, subtitle, title } from './config';

export default function Certifications() {
	return <Page title={title} subtitle={subtitle} activities={coursesAndCertifications} />;
}
