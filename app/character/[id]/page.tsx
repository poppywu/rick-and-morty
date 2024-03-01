"use client";
import React from "react";
import { useFetch } from "@/utils/useFetch";
import Loading from "@/components/Loading";
import { Avatar, Card, CardContent } from "@mui/material";

interface CharacterDetailPageParamProps {
  params: { id: number };
}

export declare type CharacterDetailType = {
  id: number;
  name: string;
  image: string;
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
    <>
      <Card sx={{ minWidth: 680 }}>
        <div>
      <Avatar
              alt="character-detail"
              src={data?.image}
              sx={{ height: 200, width: 200 }}
            />
          <h1>
          {data?.name}
          </h1>
          </div>
        <CardContent>

        </CardContent>
      </Card>
    </>
  );
}

export default CharacterDetailPage;
