import { useEffect, useState } from "react";

export function useBatchFetch<T>(
  urls: string[],
  dependencyArray: any[] = []
): [T[] | undefined, boolean, any] {
  const [data, setData] = useState<T[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const fetcher = async (urls: string[]) => {
    setLoading(true);
    try {
      const responses = await Promise.all(urls?.map((url) => fetch(url)));
      const dataArr: T[] = await Promise.all(
        responses?.map((response) => response.json())
      );
      setData(dataArr);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
      console.error(e);
    }
  };
  useEffect(() => {
    fetcher(urls);
  }, [...dependencyArray]);
  return [data, loading, error];
}
