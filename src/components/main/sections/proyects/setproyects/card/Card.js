/** @module Sections/Proyects */
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { container } from './card.module.css';
import CardNav from './CardNav';
/**
 * A component to render cards.
 * @function Card
 * @example
 * import Card from 'components/main/sections/setproyects/card/Card'
 * <Card />
 * @returns {JSX.Element} An element of React.
 */
const Card = ({ name, url, desc, lang, img, upIndex, downIndex }) => {
  // Handle Click Arrow.
  const handleClickArrow = (upOrDown) => {
    upOrDown();
  };
  // Other design.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isMediumDevice = useMediaQuery({ minWidth: 640, maxWidth: 1280 });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <article className={container}>
        <article>
          {[name].map((key) => (
            <motion.div
              key={key}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1.5 } },
              }}
            >
              <h3>{name}</h3>
              <h4>{lang}</h4>
              <p>{desc}</p>
              <CardNav
                handleClickArrow={handleClickArrow}
                upIndex={upIndex}
                downIndex={downIndex}
                url={url}
              />
            </motion.div>
          ))}
        </article>
        {[name].map((key) => (
          <motion.div
            key={key}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 2 } },
            }}
          >
            <Image
              src={img}
              alt={name}
              width={800}
              height={800}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAkAAJ8AmzsOXcYAAAAASUVORK5CYII='
            />
          </motion.div>
        ))}
      </article>
    );
  }
  // Render Normal.
  return (
    <article className={container}>
      {[name].map((key) => (
        <motion.div
          key={key}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 2 } },
          }}
        >
          <h3>{name}</h3>
          <h4>{lang}</h4>
          <Image
            src={img}
            alt={name}
            width={isMediumDevice ? 550 : 300}
            height={isMediumDevice ? 600 : 400}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAkAAJ8AmzsOXcYAAAAASUVORK5CYII='
          />
          <p>{desc}</p>
          <CardNav
            handleClickArrow={handleClickArrow}
            upIndex={upIndex}
            downIndex={downIndex}
            url={url}
          />
        </motion.div>
      ))}
    </article>
  );
};

export default Card;
