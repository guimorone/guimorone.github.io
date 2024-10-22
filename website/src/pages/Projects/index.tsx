import Page from '../../components/Page';
import { title, subtitle, projects } from './config';

export default function Projects() {
	return <Page title={title} subtitle={subtitle} activities={projects} />;
}
