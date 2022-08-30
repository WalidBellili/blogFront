import React from "react";

const Card = ({ article }) => {
  console.log(article);
  return (
    <div className="card">
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <p>{article.date}</p>
    </div>
  );
};

export default Card;
