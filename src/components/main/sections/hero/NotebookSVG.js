/** @module Main/Sections/Hero */
/**
 * Use a icon to use like a Github Link button.
 * @function NotebookSVG
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import NotebookSVG from 'components/main/section/home/NotebookSVG'
 * <NotebookSVG height={32} width={32} />
 * @returns {JSX.Element} An element of React.
 */
const NotebookSVG = (props) => (
  <svg width={350} height={350} viewBox='0 0 2200 1500' {...props}>
    {/* Screen Notebook */}
    <path d='M1939 147v982H250V147l845-1 844 1z' fill='#b3b3b3' />
    {/* Screen Borders */}
    <path
      d='M1979 956V123a52 52 0 00-52-52H263c-10 0-20 3-29 8a53 53 0 00-24 44v1079h1769V956zm-40-220v393H250V147l845-1h844v492z'
      fill='#333'
    />
    {/* Touchpad Notebook */}
    <path
      d='M991 1202h207c0 6 1 12-2 17-3 4-8 5-12 5h-179c-4 0-8-1-11-4-4-5-3-12-3-18z'
      fill='#999'
      stroke='#999'
      strokeWidth={0.1}
    />
    {/* First Light */}
    <path
      d='M134 1213c4-5 12-5 16 0 2 3 1 7 2 10h-1l-10 2-9-2c0-4 0-7 2-10z'
      fill='#b3b3b3'
      stroke='#b3b3b3'
      strokeWidth={0.1}
    />
    <path
      d='M132 1223l9 2 10-2c-2 3-5 6-9 6-5 0-7-4-10-7z'
      fill='#4e4e4e'
      stroke='#4e4e4e'
      strokeWidth={0.1}
    />
    {/* Second Light */}
    <path
      d='M193 1213c4-5 12-4 15 1 3 3 2 7 2 10h-1c-6 1-12 1-18-1h0c0-4-1-8 2-10z'
      fill='#b3b3b3'
      stroke='#b3b3b3'
      strokeWidth={0.1}
    />
    <path
      d='M191 1223c6 2 12 2 18 1-4 6-14 6-18-1z'
      fill='#4f4f4f'
      stroke='#4f4f4f'
      strokeWidth={0.1}
    />
    {/* Base Notebook */}
    <path
      d='M57 1237c7-2 14-1 20-1h2035c7 0 14-1 20 1-1 9-7 16-16 19H72c-8-3-14-10-15-19z'
      fill='#b3b3b3'
      stroke='#b3b3b3'
      strokeWidth={0.1}
    />
  </svg>
);

export default NotebookSVG;
