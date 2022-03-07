import { Selector } from "testcafe";
import routes from "../../config/routes";

fixture`Get Recent articles`.page`${routes.home}`;

test("Get two articles", async (t) => {
  const items = Selector("span").withText("·");
  await t.expect(items.count).eql(2);
});
