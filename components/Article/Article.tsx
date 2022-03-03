import Image from "next/image";
import style from "./Article.module.scss";

export interface IProps {
  imageSrc: string;
  title: string;
  author: string;
  date: string;
  text: string;
  numOfComments: number;
}
function Article({
  imageSrc,
  title,
  author,
  date,
  text,
  numOfComments,
}: IProps) {
  return (
    <div className={style.article}>
      <div className={style.image}>
        <Image
          src={imageSrc}
          layout="responsive"
          width={272}
          height={244}
          alt="Preview"
        />
      </div>
      <div className={style.content}>
        <h4>{title}</h4>
        <div className={style.autorAndDate}>
          <p>{author}</p>
          <span>·</span>
          <p>{date}</p>
        </div>
        <p className={style.text}>{text}</p>
        <div className={style.bottom}>
          <a className={style.link}>Read whole article</a>
          <p className={style.comments}>{numOfComments} comments</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
