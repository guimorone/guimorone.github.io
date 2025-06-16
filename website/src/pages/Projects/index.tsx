import Page from '../../components/Page';
import { projects, subtitle, title } from './config';

export default function Projects() {
	return <Page title={title} subtitle={subtitle} activities={projects} />;
}
