import UFPE from '../../assets/images/UFPE.png';
import Banner from '../../components/Banner';
import Page from '../../components/Page';
import { CIN_UFPE_URL } from '../../constants/urls';
import { experiences, subtitle, title } from './config';

export default function Academic() {
	return (
		<>
			<Page title={title} subtitle={subtitle} activities={experiences} photo={{ src: UFPE, alt: 'UFPE logo' }} />
			<Banner link={{ url: CIN_UFPE_URL, label: 'Learn more about CIn-UFPE' }} />
		</>
	);
}
