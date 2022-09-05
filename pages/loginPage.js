import { Selector, t } from "testcafe";

class loginPage {
  constructor() {
    this.user = Selector("#user-name");
    this.pass = Selector("#password");
    this.button = Selector("#login-button");
  }

  async enviarInfo(user, pass) {
    await t.typeText(this.user, user);
    await t.typeText(this.pass, pass);
    await t.click(this.button);
  }
}

export default new loginPage();
