/** @module Pages */
import Document, { Html, Head, Main, NextScript } from 'next/document';
/**
 * A class manager for base public html by nextjs.
 * @class MyDocument
 * @returns {JSX.Element} An element of React.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta name='application-name' content='Peter DG Sitio Web' />
          <meta name='robots' content='index,follow' />
          <meta name='google' content='notranslate' />
          <meta name='subject' content='Sitio web de Peter Damián Gómez.' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8' />
          <meta
            name='keywords'
            content='Peter, Damián, Gómez, Personal, Web, Sitio'
          />
          <meta name='author' content='Peter DG' />
          <meta name='distribution' content='global' />
          {/*
           * Add base64 icon, to fix reply request.
           */}
          <link
            rel='icon'
            type='image/png'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUwSURBVFhH7ZhJKIVrGMeP8UqXhUtiQSKkiMRVhpIhCwtlqku2NrcsbJQNK8lCSJIpIQkLUyhDQtc8LG6GSLnm2TVkdv++53Gc8/kGh7gWfotz3ud9v++8/+953/d5nu8YPT4+ar4Txvz9bZAWBLf9X56TFvSXABtfi8QeOjs7S05ORqOpqcnKyoo6vw5aHV3q6up+EUCDu74QsaDt7e3AwEDSigZMHhD4W4CNz0EsKD8/38jIiAShAZMHHh+vrq7+EECDuz4BPUELCwuurq6khnBzc1tcXKTRzs7OXwXQoJ7P4EXQ3d1dRkYGC3nGwsIiOzv7/v7++Pg4MjKSOqOiomDybQL/CLDxMV4EjYyM2NnZ0ZQE9rW9vX1QUNDc3FxFRYWZmRn1owGTbxOe5E8BNLjrA7Cgi4uL+Ph4mo+Amv39fRoFDw8PNzc36GlsbMSor6/v+vo6DQ0PD/8mgAb1fAQWNDU1FR4ejmP1u0BwcHB0dPTJyQmNikA4gKbc3Fy08SQJCQnCI2gSExNh0jXvhgXh4Jyenv77DGIjgFcwBNPHx8fLyyszM/Pg4AA9iAWY3snJaX5+vqWlxdLSkgShAVP4vffzsofkwNGj+UBPTw964AYy09LSQkJCqE2EhobqLvQ7UBc0MDCAmeChrKysw8ND9GxubtL0cImxsV42NDExKS4uphvfh5IgWrLXVFZW8vxSQPrq6ipfajhKgnQjMsTB3NjYKCsr45kF4CGRkwB8KfcwqsgK2tnZoVPW29vL87wCuQXRAbEbK8VdAo6OjpOTk/Q7hiJbMeJs397esqFDTU0N3/rsNpxHfJ6fn6+trSFKYcm2trZKSkqur6/5HoPg39YH+QtZjM6LyEO6giSBmqSkJGtr666uLu4yBAkP4bnLy8tXVlbYNhAHB4fCwkJbW9uioiLENu59MxKCxsbGGhoa2JAHT+Ps7Ozh4YGwnpKSUlpaivxKQ9hDBQUFg4ODra2t1GMA5Cgtl5eXVL9Kgl2sXTI40t3dHUEcCScsLAypJjY2dnd3l0YRsXC9n5+foVWA2ENY+I6ODjb0gRptwidQnIjo6+ujIRsbm9TU1NnZWTwA9bwRU/4WQP2AHB4TEyM6xgTO0fj4OBsCuB4lAFWYeDj4bGZmBiUljSKr1NfXV1VVxcXFeXt7U6c65CgtmAPl2GtwhtPT03F9dXU1XYnpIYUCIx4AmJqaenp60ijASwuuRz9KJUQQ7lVDvGS4n+YQMTo62tzcjAvIHwTuhyxAovEwiBcwaZQyHVS2t7e//S1PNjDqgsXCGT46OmJbHmxziKA2VhN7DuB2LByOC/Ur8yZB2OYKCUQXFHfc0miQeaDG3Nwcn6iP+/v7eUARdUE4ycgDSA5sK4Lzzy2NZnp6WnDQE1hcxDaKBcqoC8IPiQ6XAhEREdSAe5DXyD0ECr3u7m4aVUBF0PLyMtKIdp9Kgvf/gIAAlByoaF1cXKgTYZqFPK8ajgt2tzaay6EkCDqgBprY1gfHTTinT0X3xMREXl4eojYNIb/m5OTougfARDFOL5l0mSRKgrBSiGxsvBnMSsUuC9FnaGhoaWmJL5VCVhB2Mfby3t4e24ogCKHyR+WKB0CgRxnO8z+vlxZchp0kWWkRsv8xtrW1IYdrXzAUwNoh+mknpoaCiQoT7+z+/v58vz7SHoLDUdN8hhp8wgXIwXI/Lu0hVGe1tbUKjtWCuPyUbZDIhJyDti6UOl73QxaqKNFfCcTP38Jq/AhS40eQGj+C1PhmgjSa/wDnJfd18L8H4wAAAABJRU5ErkJggg=='
          />
          {/*
           *
           *
           */}
          <link
            rel='me'
            href='https://github.com/PeterDamianG'
            type='text/html'
          />
          {/* Need reload cache 48hs */}
          <meta httpEquiv='expires' content='172800' />
          {/* Facebook Open Graph */}
          <meta property='fb:app_id' content='123456789' />
          <meta
            property='og:url'
            content='https://github.com/PeterDamianG/PeterDamianG'
          />
          <meta property='og:type' content='Peter DG Sitio Web' />
          <meta property='og:title' content='Peter DG Sitio Web' />
          <meta property='og:image' content='/exampleweb.jpg' />
          <meta
            property='og:image:alt'
            content='Imagen de ejemplo de la web. Del sitio web de Peter DG.'
          />
          <meta
            property='og:description'
            content='Sitio Web del desarrollador web, Peter DG.'
          />
          <meta property='og:site_name' content='Peter DG Sitio Web' />
          <meta property='article:author' content='Peter DG' />
          {/* Twitter Card */}
          <meta name='twitter:card' content='Peter DG Sitio Web' />
          <meta name='twitter:site' content='@PeterDG' />
          <meta name='twitter:creator' content='@PeterDG' />
          <meta
            name='twitter:url'
            content='https://github.com/PeterDamianG/PeterDamianG'
          />
          <meta name='twitter:title' content='Peter DG Sitio Web' />
          <meta
            name='twitter:description'
            content='Sitio Web del desarrollador web, Peter DG.'
          />
          <meta name='twitter:image' content='/exampleweb.jpg' />
          <meta
            name='twitter:image:alt'
            content='Imagen de ejemplo de la web. Del sitio web de Peter DG.'
          />
          {/* Twitter Card */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
