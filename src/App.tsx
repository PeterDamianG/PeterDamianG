import AppBar from '@layout/appbar/AppBar';
import Main from '@components/main/Main';
import Footer from '@layout/footer/Footer';
/**
 * Root component of the application.
 * Renders the main layout: AppBar + Main content + Footer.
 */
const App = (): JSX.Element => (
  <>
    <AppBar />
    <Main />
    <Footer />
  </>
);

export default App;
