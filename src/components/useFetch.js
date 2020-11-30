import { useEffect, useState } from "react";

const cache = new Map();

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      if (cache[url]) {
        const data = cache[url];
        setData(data);
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cache[url] = data;
        setData(data);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};
export default useFetch;