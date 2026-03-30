import "../support/world";
import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";

Given("que el usuario abre la aplicación", async function (this: CustomWorld) {
  const login = new LoginPage(this.page!);
  await login.navigate();
});

When("inicia sesión con {string} y {string}", async function (this: CustomWorld, user: string, pass: string) {
  const login = new LoginPage(this.page!);
  await login.login(user, pass);
});

Then("debería ver la página de productos", async function (this: CustomWorld) {
  const inventory = new InventoryPage(this.page!);
  await inventory.validatePage();
});

When("agrega el producto {string}", async function (this: CustomWorld, product: string) {
  const inventory = new InventoryPage(this.page!);
  await inventory.addProduct(product);
});

When("va al carrito", async function (this: CustomWorld) {
  const inventory = new InventoryPage(this.page!);
  await inventory.goToCart();
});

Then("valida el producto {string}", async function (this: CustomWorld, product: string) {
  const cart = new CartPage(this.page!);
  await cart.validateProduct(product);
});

When(
  "completa la compra con {string}, {string}, {string}",
  async function (this: CustomWorld, first: string, last: string, zip: string) {
    const cart = new CartPage(this.page!);
    const checkout = new CheckoutPage(this.page!);

    await cart.checkout();
    await checkout.fillData(first, last, zip);
    await checkout.finish();
  }
);

Then("debería ver confirmación de compra", async function (this: CustomWorld) {
  const complete = new CheckoutCompletePage(this.page!);
  await complete.validateSuccess();
});

Then("debería ver error de login", async function (this: CustomWorld) {
  const login = new LoginPage(this.page!);
  await login.validateError();
});