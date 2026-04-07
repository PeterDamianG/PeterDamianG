import { render, screen } from '@testing-library/preact';
import Experience from '@sections/experience/Experience';

describe('/src/components/main/section/experience - <Experience> - Render', () => {
  it('does render section experience with title', () => {
    render(<Experience />);
    expect(screen.getByText('Experiencia')).toBeTruthy();
  });

  it('does render all experience items', () => {
    render(<Experience />);
    expect(screen.getByText('Sr CS Engineer')).toBeTruthy();
    expect(screen.getByText('Mercado Libre')).toBeTruthy();
    expect(screen.getByText('Desarrollador de software')).toBeTruthy();
    expect(screen.getByText('Ticmas')).toBeTruthy();
    expect(screen.getByText('Administración y Soporte de IT')).toBeTruthy();
    expect(screen.getByText('Correa Construcciones')).toBeTruthy();
  });

  it('does render job descriptions', () => {
    render(<Experience />);
    expect(
      screen.getByText(
        'Desarrollo y seguridad de productos propios de la empresa.',
      ),
    ).toBeTruthy();
    expect(
      screen.getByText(
        'Negociación de proyectos con clientes finales.',
      ),
    ).toBeTruthy();
  });

  it('does render period and location metadata', () => {
    render(<Experience />);
    expect(screen.getByText(/abr\. 2022 - actualidad/)).toBeTruthy();
    expect(screen.getByText(/dic\. 2021 - abr\. 2022/)).toBeTruthy();
    expect(screen.getByText(/dic\. 2019 - oct\. 2021/)).toBeTruthy();
  });

  it('does render scroll-down link to certifications', () => {
    render(<Experience />);
    const link = screen.getByRole('link', { name: /scroll/i });
    expect(link.getAttribute('href')).toBe('#certifications');
  });
});
