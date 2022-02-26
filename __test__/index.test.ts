import { Selector } from "testcafe";
import routesForTest from "../config/routesForTest";

fixture`Get header items`.page`${routesForTest.home}`;

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