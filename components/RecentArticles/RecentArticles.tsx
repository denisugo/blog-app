import style from "./RecentArticles.module.scss";
import Article from "../Article/Article";

const mock = [
  {
    title: "Why Do Cats Have Whiskers?",
    text: "A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly sensitive tactile hairs that grow in patterns on a cat's muzzle, above its eyes and elsewhere on its body, like the ears, jaw and forelegs",
    date: "02/13/17",
    author: "Elisabeth Strain",
    imageSrc: "/mocks/thumbs/img0.png",
    numOfComments: 4,
  },
  {
    title: "Wet vs. Dry Cat Food: Which is Better?",
    text: "If you arent sure how much wet food you should feed your cat, Purinas expert nutritionists can help. Plus, they offer guidance on food safety and provide serving ideas your cat will love.",
    date: "02/13/20",
    author: "Elisabeth Strain",
    imageSrc: "/mocks/thumbs/img1.png",
    numOfComments: 0,
  },
];

function RecentArticles() {
  const articles = mock;
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
