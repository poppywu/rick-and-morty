"use client";
import React from "react";
import { useFetch } from "@/utils/useFetch";
import Loading from "@/components/Loading";
import CharacterDetail from "@/components/CharacterDetail";
import styles from '@/styles/CharacterPage.module.css';

interface CharacterDetailPageParamProps {
  params: { id: number };
}

export declare type CharacterDetailType = {
  id: number | undefined;
  name: string | undefined;
  image: string | undefined;
  status: string | undefined;
  species: string | undefined;
  gender: string | undefined;
  origin: { name: string } | { name: undefined };
  location: { name: string } | { name: undefined };
};

function CharacterDetailPage({
  params: { id },
}: CharacterDetailPageParamProps) {
  const [data, loading, error] = useFetch<CharacterDetailType>(
    `https://rickandmortyapi.com/api/character/${id}`,
    [id]
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Sorry, something was wrong</p>;
  }
  return (
    <div className={styles.body}>
      <CharacterDetail {...data}/>
    </div>
  );
}

export default CharacterDetailPage;
