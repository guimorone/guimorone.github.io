import Banner from '../../components/Banner';
import Page from '../../components/Page';
import { title, subtitle, experiences } from './config';
import { CIN_UFPE_URL } from '../../constants/urls';
import UFPE from '../../assets/images/UFPE.png';

export default function Academic() {
	return (
		<>
			<Page title={title} subtitle={subtitle} activities={experiences} photo={{ src: UFPE, alt: 'UFPE logo' }} />
			<Banner link={{ url: CIN_UFPE_URL, label: 'Learn more about CIn-UFPE' }} />
		</>
	);
}
