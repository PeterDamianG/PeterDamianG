import * as css from './titlesection.module.css';
/**
 * Generic component for set a Title to sections.
 * @example
 * import TitleSection from 'components/ui/titlesection/TitleSection'
 * <TitleSection />
 */
const TitleSection = ({
  value = 'Title Section',
}: {
  value: string;
}): JSX.Element => <h2 className={css['title']}>{value}</h2>;

export default TitleSection;
