import { useEffect, useState } from "react";

export function useBatchFetch(urls:string[],dependencyArray=[]){
    const [data,setData]=useState();
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState();
    const fetcher=async(urls:string[])=>{
        setLoading(true);
        try{
        const responses=await Promise.all(urls?.map(url=>fetch(url)));
        const dataArr= await Promise.all(responses?.map(response=>response.json()));
        setData(dataArr);
        setLoading(false)
        }catch(e){
            setLoading(false);
            setError(e);
            console.error(e);
        }
    }
    useEffect(()=>{
        fetcher(urls);
    },[...dependencyArray]);
    return [data,loading,error];
  }