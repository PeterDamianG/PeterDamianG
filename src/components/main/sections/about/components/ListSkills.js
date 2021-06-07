/** @module Main/Sections/About */
/**
 * A component to render a list of programming skills.
 * @function ListSkills
 * @example
 * import ListSkills from 'components/main/sections/about/ListSkills'
 * <ListSkills />
 * @returns {JSX.Element} An element of React.
 */
const ListSkills = () => (
  <ul>
    <li>Javascript</li>
    <li>NodeJS</li>
    <li>Express</li>
    <li>ReactJS</li>
    <li>C#</li>
    <li>
      ¡Hey puedes mirar en más detalle en mi{' '}
      <a href='https://github.com/PeterDamianG'>GitHub!</a>
    </li>
  </ul>
);

export default ListSkills;
