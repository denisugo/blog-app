import style from "./RecentArticles.module.scss";
import Article, { IProps } from "../Article/Article";

function RecentArticles({ articles }: { articles: IProps[] }) {
  return (
    <div className={style.container}>
      <h1>Recent Articles</h1>
      <div className={style.recentArticles}>
        {articles.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            text={article.text}
            date={article.date}
            author={article.author}
            imageSrc={article.imageSrc}
            numOfComments={article.numOfComments}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentArticles;
