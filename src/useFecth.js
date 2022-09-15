import { useState, useEffect } from "react";
import paginate from "./utils";

const url = "https://www.anapioficeandfire.com/api/books";

export const useFetch = (index=1) => {
console.log(index, " index");
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);

  const getProducts = async (url) => {

    const response = await fetch(`${url}?page=${index}`);
    const data = await response.json();
    setValue(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts(url);
  }, [index]);
  return { loading, value };
};
