import React from "react";
import CharacterCard, { CharacterCardProps } from "./CharacterCard";
import { useBatchFetch } from "@/utils/useBatchFetch";
import Loading from "./Loading";
import styles from './CharacterGroup.module.css';
import { CharacterDetailType } from "@/app/character/[id]/page";

interface CharacterMainPageProps {
  characters: string[];
}

function CharacterMainPage({ characters }: CharacterMainPageProps) {
  const [charactersData, loading, error] = useBatchFetch<CharacterDetailType>(characters, []);
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <div className={styles.characterGroup}>
      {charactersData?.map(({ name, id, image }: CharacterCardProps) => (
        <CharacterCard name={name} id={id} key={id} image={image} />
      ))}
    </div>
  );
}

export default CharacterMainPage;
