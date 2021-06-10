import { render, screen, cleanup } from '@testing-library/react';
import MenuIconSVG from 'components/icons/appbar/MenuIconSVG';
import LightIconSVG from 'components/icons/appbar/LightIconSVG';
import DarkIconSVG from 'components/icons/appbar/DarkIconSVG';
import GitHubSVG from 'components/icons/socialmedia/GitHubSVG';
import GoogleMailSVG from 'components/icons/socialmedia/GoogleMailSVG';
import LinkedInSVG from 'components/icons/socialmedia/LinkedInSVG';
import ScollDownSVG from 'components/icons/utils/scrolldown';

afterAll(cleanup);

describe('/src/components/icons - Icons', () => {
  test('render menu icon', () => {
    render(<MenuIconSVG />);
    screen.getByLabelText(/Menu Button/i);
  });
  test('render light icon', () => {
    render(<LightIconSVG />);
    screen.getByLabelText(/Light Button/i);
  });
  test('render dark icon', () => {
    render(<DarkIconSVG />);
    screen.getByLabelText(/Dark Button/i);
  });
  test('render github icon', () => {
    render(<GitHubSVG />);
    screen.getByLabelText(/GitHub Button/i);
  });
  test('render google mail icon', () => {
    render(<GoogleMailSVG />);
    screen.getByLabelText(/GoogleMail Button/i);
  });
  test('render linkedin icon', () => {
    render(<LinkedInSVG />);
    screen.getByLabelText(/LinkedIn Button/i);
  });
  test('render scroll-down icon', () => {
    render(<ScollDownSVG />);
    screen.getByLabelText(/Scroll Down/i);
  });
});
