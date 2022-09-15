import { useState, useEffect } from "react";


const url = "https://www.anapioficeandfire.com/api/books";

export const useFetch = (index=1) => {
console.log(index, " index");
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);



  useEffect(() => {
    const getProducts = async (url) => {

      const response = await fetch(`${url}?page=${index}`);
      const data = await response.json();
      setValue(data);
      setLoading(false);
    };
    getProducts(url);
  }, [index]);
  return { loading, value };
};
