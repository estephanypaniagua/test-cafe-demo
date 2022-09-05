import { Selector } from "testcafe";

fixture(`Casos de prueba de la función login`).page`https://www.saucedemo.com/`;

test("Un usuario debe poder iniciar sesión correctamente", async t => {
  await t.typeText("#user-name", "standard_user");
  await t.typeText("#password", "secret_sauce");
  await t.click("#login-button");
  await t.expect(Selector(".title").withText("PRODUCTS").exists).ok();
});
