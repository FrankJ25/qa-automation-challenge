import { Page, expect } from "@playwright/test";

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  async validateSuccess() {
    await expect(this.page.locator(".complete-header")).toHaveText("Thank you for your order!");
  }
}