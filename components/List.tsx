"use client";
import { useEffect, useState, useMemo,useCallback } from "react";
import ListItem from "./ListItem";
import { useRouter } from "next/navigation";
import { EpisodeType } from "@/app/episodes/[id]/page";
import styles from "@/styles/List.module.css";

export interface EpisodeObj {
  name: string;
  id: number;
}

function List() {
  const router = useRouter();
  const [focus, setFocus] = useState(-1);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("");
  const handleClick = useCallback((id: number) => {
    return () => {
      if (focus !== id) {
        setFocus(id);
        router.push(`/episodes/${id}`);
      } else {
        setFocus(-1);
        router.push("/");
      }
    };
  },[episodes]);
  const fetchMoreEpisodes = async (page: number) => {
    try {
      let response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      let data = await response.json();
      setEpisodes([...episodes, ...data?.results]);
      if (data?.info.next !== null) {
        setPage(page + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMoreEpisodes(page);
  }, [page]);
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const filterEpisode = useMemo(
    () =>
      episodes.filter((episode) =>
        episode.name.toLowerCase().includes(term.toLocaleLowerCase())
      ),
    [term, episodes]
  );
  const handleSearch = () => {
    setTerm(input);
  };
  const handleReset = () => {
    setInput('');
    setTerm('');
  };
  return (
    <div className={styles.lists}>
      <h1>EPISODES</h1>
      <input type="text" value={input} onChange={handleChange} placeholder="Search episodes..."/>
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>Reset</button>
      {term.length
        ? filterEpisode?.map((episodeObj) => (
            <ListItem
              title={episodeObj.name}
              key={episodeObj.id}
              isFocused={focus == episodeObj.id}
              onClick={handleClick(episodeObj.id)}
            />
          ))
        : episodes?.map((episodeObj) => (
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
