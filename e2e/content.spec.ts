import { test, expect, type Page } from '@playwright/test';

/** Scroll a una sección y espera a que su contenido lazy se monte */
async function scrollTo(page: Page, id: string): Promise<void> {
  await page.evaluate((s) => document.getElementById(s)?.scrollIntoView({ behavior: 'instant' }), id);
}

// ─── Página ────────────────────────────────────────────────────────────────

test('page title is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Peter Damián G - Personal Web');
});

// ─── Hero ──────────────────────────────────────────────────────────────────

test.describe('Hero section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows developer name', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Peter Damián Gómez' })).toBeVisible();
  });

  test('shows developer title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Senior Cybersecurity Engineer/ })).toBeVisible();
  });

  test('shows initial caption', async ({ page }) => {
    await expect(
      page.getByText('¿Cómo pasamos de tres archivos, a montones de dependencias?'),
    ).toBeVisible();
  });

  test('caption element is clickable (interactive IDE)', async ({ page }) => {
    const caption = page.getByTitle('Haz me click, para ver otro de mis pensamientos.');
    await expect(caption).toBeVisible();
  });

  test('shows scroll-down link to #about', async ({ page }) => {
    const link = page.locator('a[href="#about"]').first();
    await expect(link).toBeVisible();
  });

  test('social links visible in hero', async ({ page }) => {
    await expect(page.locator(`a[href="https://github.com/PeterDamianG"]`).first()).toBeVisible();
    await expect(
      page.locator(`a[href="https://www.linkedin.com/in/peterdamiang/"]`).first(),
    ).toBeVisible();
  });
});

// ─── About ─────────────────────────────────────────────────────────────────

test.describe('About section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await scrollTo(page, 'about');
  });

  test('shows section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Sobre Mí' })).toBeVisible();
  });

  test('shows bio text', async ({ page }) => {
    await expect(page.getByText(/¡Hola! Soy/)).toBeVisible();
  });

  test('shows avatar image', async ({ page }) => {
    const avatar = page.getByAltText('Foto del autor, Peter Damián Gómez.');
    await expect(avatar).toBeVisible();
  });

  test('shows RESUME o CV text', async ({ page }) => {
    await expect(page.getByText('RESUME o CV')).toBeVisible();
  });

  test('CV link points to pdf', async ({ page }) => {
    const cvLink = page.getByRole('link', { name: 'Resume / CV' });
    await expect(cvLink).toBeVisible();
    await expect(cvLink).toHaveAttribute('href', './resume.pdf');
  });

});

// ─── Projects ──────────────────────────────────────────────────────────────

test.describe('Projects section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await scrollTo(page, 'proyects');
  });

  test('shows first project name', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'ONG Team 42 - t42-project' })).toBeVisible();
  });

  test('shows previous and next buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Previous Button' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next Button' })).toBeVisible();
  });

  test('shows repository link', async ({ page }) => {
    // El <a> tiene aria-label="Ver repositorio de {name} en GitHub" — no "Ir a Repositorio"
    await expect(page.getByRole('link', { name: /Ver repositorio/i }).first()).toBeVisible();
  });

  test('first project links to GitHub', async ({ page }) => {
    const repoLink = page.getByRole('link', { name: /Ver repositorio de ONG Team 42/i });
    await expect(repoLink).toHaveAttribute('href', /github\.com/);
  });
});

// ─── Contact ───────────────────────────────────────────────────────────────

test.describe('Contact section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await scrollTo(page, 'contact');
  });

  test('shows section heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Contacto' })).toBeVisible();
  });

  test('shows messaging card', async ({ page }) => {
    await expect(page.getByText('Mensajería Directa')).toBeVisible();
  });

  test('shows social networks card', async ({ page }) => {
    await expect(page.getByText('Redes Sociales')).toBeVisible();
  });

  test('shows appreciation text', async ({ page }) => {
    await expect(page.getByText('Gracias por su consideración.')).toBeVisible();
  });

  test('shows Telegram link', async ({ page }) => {
    await expect(
      page.locator(`a[href="https://t.me/PeterDamianG"]`),
    ).toBeVisible();
  });

  test('shows WhatsApp link', async ({ page }) => {
    await expect(
      page.locator(`a[href="https://bit.ly/3kwROHZ"]`),
    ).toBeVisible();
  });

  test('shows LinkedIn link in contact', async ({ page }) => {
    await expect(
      page.locator(`a[href="https://www.linkedin.com/in/peterdamiang/"]`).last(),
    ).toBeVisible();
  });
});

// ─── Footer ────────────────────────────────────────────────────────────────

test.describe('Footer', () => {
  test('shows Peter DG text', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/Peter DG/i).last()).toBeVisible();
  });

  test('shows current year', async ({ page }) => {
    await page.goto('/');
    const year = new Date().getFullYear().toString();
    await expect(page.getByText(new RegExp(year)).last()).toBeVisible();
  });
});
