import { useEffect } from "react";

const Home = () => {


    useEffect(()=> {
        fetchData()git add 
    }, [])

    const fetchData = async () => {
        const request = await fetch(`http://localhost:5000/articles`)
    }
  return <div></div>;
};

export default Home;
