import { Selector } from "testcafe";
import routes from "../../config/routes";

const email = "email@example.com";
const password = "password";

fixture`Log in`.page`${routes.login}`;

test("Log a user in", async (t) => {
  const emailInput = Selector("input").withAttribute("name", "email");
  await t.typeText(emailInput, email);

  const passwordInput = Selector("input").withAttribute("name", "password");
  await t.typeText(passwordInput, password);

  const submitButton = Selector("button").withAttribute("type", "submit");
  await t.click(submitButton);

  const title = Selector("title");
  await t.expect(title.innerText).eql("Blog App");
});
