"use client"
import React from 'react'
import { useFetch } from '@/utils/useFetch';
import Loading from '@/components/Loading';
import { Avatar } from '@mui/material';


function CharacterDetailPage({params:{id}}) {
  const [data,loading,error]=useFetch(`https://rickandmortyapi.com/api/character/${id}`,[id]);
  if(loading){
    return <Loading/>
  }
  if(error){
    return <p>Sorry, something was wrong</p>
  }
  return (
    <>
    <Avatar alt="character-detail" src={data?.image} sx={{height:200,width:200}}/>
    </>
  )
}

export default CharacterDetailPage