import Collapsable from '@/components/Collapsable';
import Downloadable from '@/components/Downloadable';
import Grid from '@/components/Grid';
import GridContainer from '@/components/Grid/Container';
import { documents, subtitle, title } from './config';

export default function Warehouse() {
	return (
		<GridContainer title={title} subtitle={subtitle}>
			{documents.map(({ title, files }, index) => (
				<Collapsable title={title} key={`warehouse-section-${title}-${index}`}>
					<Grid>
						{files.map((file, idx) => (
							<Downloadable key={`warehouse-${title}-file-${file.label}-${idx}`} {...file} />
						))}
					</Grid>
				</Collapsable>
			))}
		</GridContainer>
	);
}
