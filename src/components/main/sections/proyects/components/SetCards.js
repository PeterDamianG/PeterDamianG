import { useState } from 'react';
import listProyects from './listProyects';
import Card from './Card';

const SetCards = () => {
  const [index, setIndex] = useState(0);

  const handleUpIndex = () =>
    index === listProyects.length - 1 ? setIndex(0) : setIndex(index + 1);
  const handleDownIndex = () =>
    index === 0 ? setIndex(listProyects.length - 1) : setIndex(index - 1);

  const { name, url, desc, lang, img } = listProyects[index];
  return (
    <>
      <Card
        name={name}
        url={url}
        desc={desc}
        lang={lang}
        img={img}
        upIndex={handleUpIndex}
        downIndex={handleDownIndex}
      />
    </>
  );
};

export default SetCards;
