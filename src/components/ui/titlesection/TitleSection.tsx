import * as css from './titlesection.module.css';
/**
 * Generic component for set a Title to sections.
 * @example
 * import TitleSection from 'components/ui/titlesection/TitleSection'
 * <TitleSection />
 */
const TitleSection = ({
  children = <>Title Section</>,
}: {
  children: React.ReactNode;
}): JSX.Element => <h2 className={css['title']}>{children}</h2>;

export default TitleSection;
