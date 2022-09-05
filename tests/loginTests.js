import { Selector } from "testcafe";
import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";

fixture(`Casos de prueba de la función login`).page`https://www.saucedemo.com/`;

test("Un usuario debe poder iniciar sesión correctamente", async t => {
  await loginPage.enviarInfo("standard_user", "secret_sauce");
  await t.expect(homePage.titulo.exists).ok();
});
