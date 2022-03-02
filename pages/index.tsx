import type { NextPage } from "next";
import { IProps } from "../components/Article/Article";
import RecentArticles from "../components/RecentArticles/RecentArticles";
import { getArticles } from "./api/db";

const Home: NextPage<{ articles: IProps[] }> = ({ articles }) => {
  return <RecentArticles articles={articles} />;
};

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/db");
  const articles = await response.json();
  return { props: { articles } };
};
