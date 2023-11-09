import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Home() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      //using fetch
      // await fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then((response) => response.json())
      //   .then((json) => {
      //     console.log(json);
      //  setApiData(json)
      //   });

      //using axios
      await axios("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response.data);
          setApiData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate("products");
        }}
      >
        Products
      </button>
      {apiData.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
