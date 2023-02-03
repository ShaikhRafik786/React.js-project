import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApiCall = () => {
  const [data, setData] = useState([]);

  const getProduct = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <h2>{item.id}</h2>
            <h3>{item.title}</h3>
            <h1>{item.description}</h1>
            <h3>{item.catogery}</h3>
            <th>
              <img src={item.image} alt="" width="300px" height="300px"/>
            </th>
          </div>
        );
      })}
    </div>
  );
};

