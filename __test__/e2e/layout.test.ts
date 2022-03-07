import { Selector } from "testcafe";
import routes from "../../config/routes";

fixture`Get header items`.page`${routes.home}`;

test("Get Recent Articles link item", async (t) => {
  const recentArticlesLink = Selector("#recent");
  const linkText = await recentArticlesLink.innerText;
  await t.expect(linkText).eql("Recent Articles");
});

test("Get About link item", async (t) => {
  const AboutLink = Selector("#about");
  const linkText = await AboutLink.innerText;
  await t.expect(linkText).eql("About");
});

test("Get Log in link item", async (t) => {
  const loginLink = Selector("#login");
  const linkText = await loginLink.innerText;
  await t.expect(linkText).eql("Log in");
});

test("Get Logo", async (t) => {
  const logo = Selector("img").withAttribute("alt", "Logo");
  await t.expect(logo.visible).ok();
});

// Links

test("Get index page title", async (t) => {
  const title = Selector("title");
  await t.expect(title.innerText).eql("Blog App");
});

test("Get login page title", async (t) => {
  const link = Selector("#login");
  await t.click(link);
  const title = Selector("title");
  await t.expect(title.innerText).eql("Log in");
});
