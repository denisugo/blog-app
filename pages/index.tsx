import type { NextPage } from "next";
import { IProps } from "../components/Article/Article";
import RecentArticles from "../components/RecentArticles/RecentArticles";
import routes from "../config/apiRoutes";

const Home: NextPage<{ articles: IProps[] }> = ({ articles }) => {
  return <RecentArticles articles={articles} />;
};

export default Home;

export const getServerSideProps = async () => {
  // Fetch data from db
  const response = await fetch(routes.recentArticles);
  const articles = await response.json();
  return { props: { articles } };
};
