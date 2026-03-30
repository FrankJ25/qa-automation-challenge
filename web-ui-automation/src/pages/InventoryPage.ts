import { Page, expect } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  async validatePage() {
    await expect(this.page.locator(".title")).toHaveText("Products");
  }

  async addProduct(productName: string) {
    const product = this.page.locator(".inventory_item").filter({ hasText: productName });
    await product.locator("button").click();
  }

  async goToCart() {
    await this.page.click(".shopping_cart_link");
  }

  async validateCartCount(count: string) {
    await expect(this.page.locator(".shopping_cart_badge")).toHaveText(count);
  }
}