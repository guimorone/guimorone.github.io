import Collapsible from '@/components/Collapsible';
import Downloadable from '@/components/Downloadable';
import Grid from '@/components/Grid';
import GridContainer from '@/components/Grid/Container';
import { documents, subtitle, title } from './config';

export default function Warehouse() {
	return (
		<GridContainer title={title} subtitle={subtitle}>
			{documents.map(({ title, files }) => (
				<Collapsible title={title} key={`warehouse-section-${title}`}>
					<Grid>
						{files.map(file => (
							<Downloadable key={`warehouse-${title}-file-${file.label}-${file.filepath}`} {...file} />
						))}
					</Grid>
				</Collapsible>
			))}
		</GridContainer>
	);
}
