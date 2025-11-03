import Collapsible from '@/components/Collapsible';
import Downloadable from '@/components/Downloadable';
import Grid from '@/components/Grid';
import GridContainer from '@/components/Grid/Container';
import { documents, subtitle, title } from './config';

export default function Warehouse() {
	return (
		<GridContainer title={title} subtitle={subtitle}>
			{documents.map(({ title, files }, index) => (
				<Collapsible title={title} key={`warehouse-section-${title}-${index}`}>
					<Grid>
						{files.map((file, idx) => (
							<Downloadable key={`warehouse-${title}-file-${file.label}-${idx}`} {...file} />
						))}
					</Grid>
				</Collapsible>
			))}
		</GridContainer>
	);
}
