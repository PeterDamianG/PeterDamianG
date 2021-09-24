import Image from 'next/image';
/**
 * A component to wrapper img of next component Image.
 * @example
 * import WrapperIMG from 'main/sections/showproyect/card/WrapperIMG'
 * <WrapperIMG img={img} />
 */
const WrapperIMG = ({
  img,
  name,
  quality = 50,
}: {
  img: string;
  name: string;
  quality?: number;
}): JSX.Element => (
  <Image
    onClick={(): null => null}
    src={img}
    alt={name}
    width={1280}
    height={764}
    layout='responsive'
    objectFit='cover'
    objectPosition='top'
    placeholder='blur'
    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAkAAJ8AmzsOXcYAAAAASUVORK5CYII='
    quality={quality}
  />
);

export default WrapperIMG;
