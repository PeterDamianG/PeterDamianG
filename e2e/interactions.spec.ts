import { test, expect, type Page } from '@playwright/test';

async function scrollTo(page: Page, id: string): Promise<void> {
  await page.evaluate((s) => document.getElementById(s)?.scrollIntoView({ behavior: 'instant' }), id);
}

// ─── Tema ──────────────────────────────────────────────────────────────────

test.describe('Theme toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('default theme is light', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('click Dark Button changes theme to dark', async ({ page }) => {
    await page.getByLabel('Dark Button').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('clicking twice returns to light', async ({ page }) => {
    await page.getByLabel('Dark Button').click();
    await page.getByLabel('Light Button').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('hotkey T toggles to dark', async ({ page }) => {
    await page.keyboard.press('t');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('hotkey T toggles back to light', async ({ page }) => {
    await page.keyboard.press('T');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.keyboard.press('t');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('theme persists in localStorage', async ({ page }) => {
    await page.getByLabel('Dark Button').click();
    // Esperar a que el useEffect haya actualizado data-theme antes de leer localStorage
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    const stored = await page.evaluate(() => localStorage.getItem('theme'));
    expect(stored).toBe('dark');
  });
});

// ─── Drawer ────────────────────────────────────────────────────────────────

test.describe('Drawer overlay', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opens with click on menu button', async ({ page }) => {
    await page.getByLabel('Abrir menú de navegación').click();
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('opens with hotkey M', async ({ page }) => {
    await page.keyboard.press('m');
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('closes with × button', async ({ page }) => {
    await page.keyboard.press('m');
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByRole('button', { name: 'Cerrar menú' }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('closes with Escape hotkey', async ({ page }) => {
    await page.keyboard.press('m');
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });
});

// ─── Hotkeys de navegación ─────────────────────────────────────────────────

test.describe('Navigation hotkeys', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Esperar a que React y los useEffects de WrapperSection hayan finalizado
    // para evitar race condition donde replaceState('hero') sobreescribe el hash del hotkey
    await expect(page.getByRole('heading', { name: 'Peter Damián Gómez' })).toBeVisible();
  });

  test('hotkey H sets hash to #hero', async ({ page }) => {
    await page.keyboard.press('h');
    await expect(page).toHaveURL(/#hero/);
  });

  test('hotkey A sets hash to #about', async ({ page }) => {
    await page.keyboard.press('a');
    await expect(page).toHaveURL(/#about/);
  });

  test('hotkey P sets hash to #proyects', async ({ page }) => {
    await page.keyboard.press('p');
    await expect(page).toHaveURL(/#proyects/);
  });

  test('hotkey C sets hash to #contact', async ({ page }) => {
    await page.keyboard.press('c');
    await expect(page).toHaveURL(/#contact/);
  });
});

// ─── Carrusel de proyectos ─────────────────────────────────────────────────

test.describe('Projects carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await scrollTo(page, 'proyects');
    await expect(page.getByRole('heading', { name: 'ChallengeJS Alkemy' })).toBeVisible();
  });

  test('Next button advances to second project', async ({ page }) => {
    await page.getByRole('button', { name: 'Next Button' }).click();
    await expect(page.getByRole('heading', { name: /ONG Team 42/i })).toBeVisible();
  });

  test('Previous button from first project goes to last', async ({ page }) => {
    await page.getByRole('button', { name: 'Previous Button' }).click();
    // Cicla al último proyecto (InvertirArgentina es el 7mo)
    await expect(page.getByRole('heading', { name: 'InvertirArgentina' })).toBeVisible();
  });

  test('ArrowRight key advances project', async ({ page }) => {
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('heading', { name: /ONG Team 42/i })).toBeVisible();
  });

  test('ArrowLeft key goes to previous project', async ({ page }) => {
    // Avanzar primero
    await page.getByRole('button', { name: 'Next Button' }).click();
    await expect(page.getByRole('heading', { name: /ONG Team 42/i })).toBeVisible();
    // Retroceder
    await page.keyboard.press('ArrowLeft');
    await expect(page.getByRole('heading', { name: 'ChallengeJS Alkemy' })).toBeVisible();
  });
});

// ─── Hero interactivo ──────────────────────────────────────────────────────

test.describe('Hero IDE interaction', () => {
  test('clicking caption cycles content', async ({ page }) => {
    await page.goto('/');
    const caption = page.getByTitle('Haz me click, para ver otro de mis pensamientos.');
    const initialText = await caption.textContent();
    await caption.click();
    // El texto debe cambiar al siguiente entry de HeroContent
    const newText = await caption.textContent();
    expect(newText).not.toBe(initialText);
  });
});
