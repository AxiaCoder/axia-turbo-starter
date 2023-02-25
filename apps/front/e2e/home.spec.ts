import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("");
  expect(await page.innerHTML("h1")).toMatch(/Welcome/);
});

test("has link to login", async ({ page }) => {
  await page.goto("");

  await page.getByRole("link").click();

  await expect(page).toHaveURL(/.*login/);
});
