import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Article = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const { slug } = useParams();

  const fetchData = async () => {
    const request = await fetch(`http://localhost:5000/articles/${slug}`);
    const response = await request.json();
    setArticle(response);
  };

  return (
    <section className="container">
      {article.map((article) => {
        return <Card article={article} />;
      })}
    </section>
  );
};

export default Article;
