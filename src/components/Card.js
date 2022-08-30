import { Link } from "react-router-dom";

const Card = ({ article }) => {
  console.log(article);
  return (
    <div className="card">
      <Link to={`${article.slug}`}>
        <h2>{article.title}</h2>
        <p>{article.author}</p>
        <p>{article.description}</p>
        <p>{article.date}</p>
      </Link>
    </div>
  );
};

export default Card;
