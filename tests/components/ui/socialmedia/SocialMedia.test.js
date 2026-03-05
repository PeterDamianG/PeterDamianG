import { render, screen } from '@testing-library/preact';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';

describe('/src/components/utils/SocialMedia - <SocialMedia>', () => {
  test('does render icons', () => {
    render(<SocialMedia />);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
  });
});
