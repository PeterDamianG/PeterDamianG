import { render, screen } from '@testing-library/preact';
import Certifications from '@sections/certifications/Certifications';

describe('/src/components/main/section/certifications - <Certifications> - Render', () => {
  it('does render section certifications with title', () => {
    render(<Certifications />);
    expect(screen.getByText('Certificaciones')).toBeTruthy();
  });

  it('does render certification cards', () => {
    render(<Certifications />);
    expect(
      screen.getByText('Web Application Penetration Tester (eWPT)'),
    ).toBeTruthy();
    expect(
      screen.getByText('Junior Penetration Tester (eJPT)'),
    ).toBeTruthy();
    expect(screen.getAllByText('INE').length).toBe(2);
  });

  it('does render certifications with links as anchor elements', () => {
    render(<Certifications />);
    const fccLink = screen.getByTitle(
      'Ver credencial: JavaScript Algorithms and Data Structures',
    );
    expect(fccLink.tagName).toBe('A');
    expect(fccLink.getAttribute('target')).toBe('_blank');
    expect(fccLink.getAttribute('rel')).toBe('noreferrer noopener');
  });

  it('does render certifications without links as articles', () => {
    render(<Certifications />);
    const securityGuardian = screen.getByText('Security Guardian');
    const card = securityGuardian.closest('article');
    expect(card).toBeTruthy();
  });

  it('does render scroll-down link to proyects', () => {
    render(<Certifications />);
    const link = screen.getByRole('link', { name: /scroll/i });
    expect(link.getAttribute('href')).toBe('#proyects');
  });
});
