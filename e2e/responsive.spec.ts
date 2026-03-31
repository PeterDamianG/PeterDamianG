import { test, expect, type Page } from '@playwright/test';

async function scrollTo(page: Page, id: string): Promise<void> {
  await page.evaluate((s) => document.getElementById(s)?.scrollIntoView({ behavior: 'instant' }), id);
}

// ─── Mobile (375×812 — iPhone SE/14 portrait) ──────────────────────────────

test.describe('Mobile viewport', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('page renders main content', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Peter Damián Gómez' })).toBeVisible();
  });

  test('theme toggle button is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByLabel('Dark Button')).toBeVisible();
  });

  test('drawer opens with button on mobile', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Abrir menú de navegación').click();
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('mobile drawer shows simple nav links', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Abrir menú de navegación').click();
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('link', { name: 'Inicio' })).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'Sobre Mí' })).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'Proyectos' })).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'Contacto' })).toBeVisible();
  });

  test('mobile drawer does NOT show section descriptions', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Abrir menú de navegación').click();
    // ContentNav (mobile) no tiene las descripciones de ContentNav1280
    await expect(
      page.getByText('Inicio de la web, donde les comparto algunos pensamientos.'),
    ).not.toBeVisible();
  });

  test('hero caption is visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByText('¿Cómo pasamos de tres archivos, a montones de dependencias?'),
    ).toBeVisible();
  });

  test('projects carousel works on mobile', async ({ page }) => {
    await page.goto('/');
    await scrollTo(page, 'proyects');
    await expect(page.getByRole('button', { name: 'Next Button' })).toBeVisible();
    await page.getByRole('button', { name: 'Next Button' }).click();
    await expect(page.getByRole('heading', { name: /Challenge Angular Blog/i })).toBeVisible();
  });
});

// ─── Desktop (1280×720) ────────────────────────────────────────────────────

test.describe('Desktop viewport', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('page renders main content', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Peter Damián Gómez' })).toBeVisible();
  });

  test('theme toggle button is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByLabel('Dark Button')).toBeVisible();
  });

  test('desktop drawer shows section descriptions', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Abrir menú de navegación').click();
    // ContentNav1280 incluye descripciones de cada sección
    await expect(
      page.getByText('Inicio de la web, donde les comparto algunos pensamientos.'),
    ).toBeVisible();
  });

  test('desktop drawer shows nav links with descriptions', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Abrir menú de navegación').click();
    await expect(page.getByRole('link', { name: 'Inicio' })).toBeVisible();
    await expect(page.getByText('Los proyectos públicos que he llevado a cabo.')).toBeVisible();
  });

  test('hero IDE is visible on desktop', async ({ page }) => {
    await page.goto('/');
    // En desktop (≥768px) el IDE siempre se muestra
    const ide = page.getByTitle('Haz me click, para leer el siguiente de mis pensamientos.');
    await expect(ide).toBeVisible();
  });
});
