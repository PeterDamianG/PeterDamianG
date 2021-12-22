import { render, screen, cleanup } from '@testing-library/react';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';

afterAll(cleanup);

describe('/src/components/utils/SocialMedia - <SocialMedia>', () => {
  test('does render icons', () => {
    render(<SocialMedia type />);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
  });
});
