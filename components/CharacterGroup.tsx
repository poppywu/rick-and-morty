import React from "react";
import CharacterCard, { CharacterCardProps } from "./CharacterCard";
import { useBatchFetch } from "@/utils/useBatchFetch";
import Loading from "./Loading";
import { CharacterDetailType } from "@/app/character/[id]/page";
import styles from '@/styles/CharacterGroup.module.css';

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
