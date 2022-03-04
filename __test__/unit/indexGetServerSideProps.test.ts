import { getServerSideProps } from "../../pages";
import moxios from "moxios";
import routes from "../../config/apiRoutes";
describe("Server Side Props", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should return server side properties", async () => {
    moxios.stubRequest(routes.recentArticles, {
      status: 200,
      response: [
        {
          title: "Why Do Cats Have Whiskers?",
          text: "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
          date: "02/13/17",
          author: "Elisabeth Strain",
          imageSrc: "/thumbs/img0.png",
          numOfComments: 4,
        },
      ],
    });

    const output = await getServerSideProps();

    expect(output.props.articles).not.toBeNull();
  });

  it("should return null", async () => {
    moxios.stubRequest(routes.recentArticles, {
      status: 500,
    });

    const output = await getServerSideProps();

    expect(output.props.articles).toBeNull();
  });
});
