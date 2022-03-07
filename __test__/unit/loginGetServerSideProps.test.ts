import { getServerSideProps } from "../../pages/login";
// import moxios from "moxios";
// import routes from "../../config/apiRoutes";
describe("Server Side Props Login", () => {
  it("should return title from server side properties", async () => {
    const output = await getServerSideProps();

    expect(output.props.title).toBe("Log in");
  });
});
