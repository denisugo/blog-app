import { Selector } from "testcafe";
import routesForTest from "../../config/routesForTest";

fixture`Get Recent articles`.page`${routesForTest.home}`;

test("Get two articles", async (t) => {
  const items = Selector("span").withText("·");
  await t.expect(items.count).eql(2);
});
