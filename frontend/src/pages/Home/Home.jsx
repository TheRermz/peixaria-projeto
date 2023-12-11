import { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [fish, setFish] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/fish")
      .then((res) => res.json())
      .then((data) => setFish(data));
  }, []);
  return (
    <div>
      <h1>HOME</h1>
      <div>
        {fish.map((fish) => (
          <div key={fish._id}>
            <h1>{fish.name}</h1>
            <h2>{fish.price}</h2>
            <h3>{fish.description}</h3>
            <p>{fish.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
