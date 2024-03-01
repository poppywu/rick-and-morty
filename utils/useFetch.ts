import { useState, useEffect } from "react";

export function useFetch(url: string, dependencyArray = []) {
  const [data, setData] = useState();
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState();
  const fetcher = async (url: string) => {
    setLoading(true);
    try {
      let response = await fetch(url);
      let dt = await response.json();
      setData(dt);
      setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(error);
      console.error(error);
    }
  };
  useEffect(() => {
    fetcher(url);
  }, [...dependencyArray]);
  return [data,loading,error];
}
