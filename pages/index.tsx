import axios from "axios";
import type { NextPage } from "next";
import { IProps } from "../components/Article/Article";
import RecentArticles from "../components/RecentArticles/RecentArticles";
import routes from "../config/apiRoutes";

const Home: NextPage<{ articles: IProps[] | null }> = ({ articles }) => {
  if (articles) return <RecentArticles articles={articles} />;
  return <div>Something went wrong, please reload the page</div>;
};

export default Home;

export const getServerSideProps = async () => {
  // Fetch data from db
  try {
    const articles = (await axios.get(routes.recentArticles)).data;

    return { props: { articles } };
  } catch (error) {
    return { props: { articles: null } };
  }
};
