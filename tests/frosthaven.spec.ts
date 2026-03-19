import { test, expect } from '@playwright/test';

test('zmena zlata se projevi v cloudu', async ({ page }) => {
  //  Otevři tvou live stránku (nebo local)
  await page.goto('http://localhost:4321/hero/slim-shady'); // Uprav podle svého ID

  const goldInput = page.locator('input[name="gold"]');

  // 1. POČKEJ, až se načtou data (aby tam nebyla stará hodnota nebo prázdno)
  // Čekáme, dokud v poli není aspoň něco (pokud default není 0)
  await expect(goldInput).toBeVisible();

  // 2. POUŽIJ fill() znovu, ale pro jistotu po krátké pauze nebo kliknutí
  await goldInput.click();
  await goldInput.fill('99');

  // KLÍČOVÝ KROK: Počkej, až aplikace odpoví na uložení
  // Pokud tvoje aplikace posílá API request při uložení, počkáme na něj:
  try {
    // Počkáme na jakýkoliv síťový request, který skončí po fillu
    await page.waitForResponse((response) => response.status() === 200, {
      timeout: 2000,
    });
  } catch (e) {
    // Pokud žádný request neproběhl, počkáme aspoň sekundu "natvrdo"
    await page.waitForTimeout(1000);
  }

  // 4. TESTOVACÍ TRIK: Reloadni stránku, abys ověřil, že se to v tom cloudu opravdu uložilo
  await page.reload();

  // 5. TEĎ zkontroluj výsledek
  await expect(goldInput).toHaveValue('99');
});
