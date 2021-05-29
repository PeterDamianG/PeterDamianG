import { render, screen } from '@testing-library/react';
import MenuIconSVG from 'components/icons/appbar/MenuIconSVG';
import LightIconSVG from 'components/icons/appbar/LightIconSVG';
import DarkIconSVG from 'components/icons/appbar/DarkIconSVG';
import GitHubSVG from 'components/icons/socialmedia/GitHubSVG';
import InstagramSVG from 'components/icons/socialmedia/InstagramSVG';
import LinkedInSVG from 'components/icons/socialmedia/LinkedInSVG';
import LoaderSVG from 'components/icons/LoaderSVG';

describe('/src/components/icons - Icons', () => {
  test('render menu icon', () => {
    render(<MenuIconSVG />);
    screen.getByLabelText(/Menu Button/);
  });
  test('render light icon', () => {
    render(<LightIconSVG />);
    screen.getByLabelText(/Light Button/);
  });
  test('render dark icon', () => {
    render(<DarkIconSVG />);
    screen.getByLabelText(/Dark Button/);
  });
  test('render github icon', () => {
    render(<GitHubSVG />);
    screen.getByLabelText(/GitHub Button/);
  });
  test('render instagram icon', () => {
    render(<InstagramSVG />);
    screen.getByLabelText(/Instagram Button/);
  });
  test('render linkedin icon', () => {
    render(<LinkedInSVG />);
    screen.getByLabelText(/LinkedIn Button/);
  });
  test('render loader-spinner icon', () => {
    render(<LoaderSVG />);
    screen.getByLabelText(/Loader Spinner/);
  });
});
