import "../support/world";
import { Before, After, Status } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

Before(async function (this: CustomWorld) {
  await this.launchBrowser(false);
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({
      path: `reports/${Date.now()}.png`
    });
    await this.attach(screenshot, "image/png");
  }

  await this.closeBrowser();
});