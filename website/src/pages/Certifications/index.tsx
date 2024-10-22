import Page from '../../components/Page';
import { title, subtitle, licenses } from './config';

export default function Certifications() {
	return <Page title={title} subtitle={subtitle} activities={licenses} />;
}
