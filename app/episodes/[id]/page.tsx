"use client";

import { useFetch } from "@/utils/useFetch";
import CharacterGroup from "@/components/CharacterGroup";
import Loading from "@/components/Loading";

interface EpisodePageParamProps {
  params: { id: number };
}

function EpisodePage({ params: { id } }: EpisodePageParamProps) {
  const [data, loading, error] = useFetch(
    `https://rickandmortyapi.com/api/episode/${id}`,
    [id]
  );
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <p>Whoops, here is an error loading page.</p>;
  }
  return <CharacterGroup characters={data?.characters} />;
}

export default EpisodePage;
