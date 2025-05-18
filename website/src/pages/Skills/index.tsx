import Grid from '../../components/Grid';
import GridContainer from '../../components/Grid/Container';
import Collapsable from '../../components/Collapsable';
import Stars from '../../components/Stars';
import { title, subtitle, skills, languages } from './config';
import { classNames } from '../../utils';
import { LINKEDIN_SKILLS_URL } from '../../constants/urls';

export default function Skills() {
	return (
		<GridContainer title={title} subtitle={subtitle}>
			<Collapsable title="Tools">
				<Grid>
					{skills?.map(({ Icon, label, rating }, index) => (
						<div key={`skill-${label}-${index}`} className="flex items-center gap-x-2">
							<Icon.Element className={classNames(Icon.color, 'w-auto h-4 sm:h-5 md:h-6')} aria-hidden="true" />
							<p className="text-sm md:text-base text-zinc-100">{label}</p>
							<Stars rating={rating} />
						</div>
					))}
				</Grid>
			</Collapsable>
			<Collapsable title="Languages">
				<Grid>
					{languages?.map(({ label, description, rating }, index) => (
						<div key={`language-${label}-${index}`} className="flex items-center gap-x-2">
							<p className="text-sm md:text-base text-zinc-100">
								{label} <span className="text-xs md:text-md text-zinc-300">({description})</span>
							</p>
							<Stars rating={rating} />
						</div>
					))}
				</Grid>
			</Collapsable>
			<p className="text-xs md:text-sm">
				If you want to know more,&nbsp;
				<a href={LINKEDIN_SKILLS_URL} target="_blank" className="text-indigo-300 hover:text-indigo-200">
					click here
				</a>
			</p>
		</GridContainer>
	);
}
