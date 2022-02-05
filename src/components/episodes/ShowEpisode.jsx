import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ShowEpisode = () => { 
  const seasonId = useParams().seasonId;
  const episodeId = useParams().id;

  const [lines, setLines] = useState([]);

  useEffect( async() => {
    await axios.get(process.env.REACT_APP_SERVER_URL + `/api/v1/seasons/${seasonId}/episodes/${episodeId}`)
    .then(res => {
      setLines(res.data);
      console.log(lines);
    })
    .catch(e => {
      console.log(e);
    })
  }, []);

  // const getLines () => {

  // }

  return (
    <>
      <h1>Season {seasonId}, Episode {episodeId}</h1>
      <div>
        {lines.map((val, i) => (
          <p key={`line${i}`}>{val.content}</p>
        ))}
      </div>
    </>
  )
}