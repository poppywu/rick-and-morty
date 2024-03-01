import { useState, useEffect } from "react";

export function useFetch<T>(url: string, dependencyArray: any[] = []):[T|undefined,boolean,any] {
  const [data, setData] = useState<T|undefined>();
  const [loading,setLoading]=useState<boolean>(false);
  const [error,setError]=useState<any>();
  const fetcher = async (url: string) => {
    setLoading(true);
    try {
      let response = await fetch(url);
      let dt:T = await response.json();
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
