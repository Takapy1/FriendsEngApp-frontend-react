import axios from "axios";
import React, { Component, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ShowEpisode = () => { 
  console.log(useParams.id);
  // const seasonId = useParams().id;

  // useEffect( () => {
  //   axios.get(process.env.REACT_APP_SERVER_URL + `/api/v1/seasons/${seasonId}/episodes/${episodeId}`)
  // })

  // const getLines () => {

  // }

  return (
    <>
      <p>show episode page</p>
    </>
  )
}