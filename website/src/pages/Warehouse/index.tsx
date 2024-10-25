import Title from '../../components/Title';
import { title, subtitle } from './config';

export default function Warehouse() {
	return (
		<div className="w-full mb-auto">
			<Title title={title} subtitle={subtitle} />
		</div>
	);
}
