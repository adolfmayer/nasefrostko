import { test, expect } from '@playwright/test';

test('zmena zlata se projevi v cloudu', async ({ page }) => {
  // 1. Otevři tvou live stránku (nebo local)
  await page.goto('http://localhost:4321/hero/slim-shady'); // Uprav podle svého ID

  // 2. Najdi políčko se zlatem a zadej tam 99
  const goldInput = page.locator('input[name="gold"]');
  await goldInput.fill('99');

  // 3. Počkej vteřinu (kvůli našemu debouncu)
  await page.waitForTimeout(1500);

  // 4. Obnov stránku, abychom viděli, jestli se to načetlo ze Supabase
  await page.reload();

  // 5. Zkontroluj, jestli je tam pořád 99
  await expect(goldInput).toHaveValue('99');
});