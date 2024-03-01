"use client";

import CharacterCard from "@/components/CharacterCard";
import Loading from "@/components/Loading";
import { useFetch } from "@/utils/useFetch";
import styles from './page.module.css';
import { CharacterDetailType } from "./character/[id]/page";



declare type CharactersType={
  info:{next:string};
  results:CharacterDetailType[];
}

export default function Home() {
  // define the initial load
  const [data, loading, error] = useFetch<CharactersType>(
    "https://rickandmortyapi.com/api/character",
    []
  );
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <p>Whoops, here is an error loading initial page.</p>;
  }
  return (
    <div className={styles.content}>
      {data?.results?.map(({ name, image, id }) => (
        <CharacterCard name={name} image={image} id={id} key={id} />
      ))}
    </div>
  );
}
