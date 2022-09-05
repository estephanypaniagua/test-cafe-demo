import { Selector } from "testcafe";
import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import { URLS, CREDENCIALES } from "../data/Constantes";

fixture(`Casos de prueba de la función login`).page`${URLS.URL}`;

test("Un usuario debe poder iniciar sesión correctamente", async t => {
  await loginPage.enviarInfo(CREDENCIALES.USER, CREDENCIALES.PASS);
  await t.expect(homePage.titulo.exists).ok();
});
