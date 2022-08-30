import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(`http://localhost:5000/articles`);
    const response = await request.json();
    setArticles(response);
  };
  console.log(articles);
  return (
    <section className="container">
      {articles.map((article) => {
        return <Card article={article} />;
      })}
    </section>
  );
};

export default Home;
