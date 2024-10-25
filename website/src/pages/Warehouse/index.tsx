import Grid from '../../components/Grid';
import GridContainer from '../../components/Grid/Container';
import Downloadable from '../../components/Downloadable';
import { title, subtitle, files } from './config';

export default function Warehouse() {
	return (
		<GridContainer title={title} subtitle={subtitle}>
			<Grid>
				{files.map((file, index) => (
					<Downloadable key={`warehouse-file-${file.label}-${index}`} {...file} />
				))}
			</Grid>
		</GridContainer>
	);
}
