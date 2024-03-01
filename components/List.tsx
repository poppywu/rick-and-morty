"use client";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { useRouter } from "next/navigation";
import styles from './List.module.css';
import { EpisodeType } from "@/app/episodes/[id]/page";

export interface EpisodeObj {
  name: string;
  id: number;
}

function List() {
  const router = useRouter();
  const [focus, setFocus] = useState(-1);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [page,setPage]=useState(1);
  const handleClick = (id: number) => {
    return () => {
      if(focus!==id){
        setFocus(id);
      router.push(`/episodes/${id}`);
      }else{
        setFocus(-1);
        router.push('/');
      }
    };
  };
  const fetchMoreEpisodes = async (page:number) => {
    try {
      let response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      let data = await response.json();
      setEpisodes([...episodes,...data?.results]);
      if(data?.info.next!==null){
        setPage(page+1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    fetchMoreEpisodes(page);
  },[page])
  return (
    <div className={styles.lists}>
      {episodes?.map((episodeObj) => (
        <ListItem
          title={episodeObj.name}
          key={episodeObj.id}
          isFocused={focus == episodeObj.id}
          onClick={handleClick(episodeObj.id)}
        />
      ))}
      </div>
  );
}

export default List;
