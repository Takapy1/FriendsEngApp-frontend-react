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
      setLines(res.data.data);
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
      <p>show episode page</p>
      <div>
        {lines.map((val, _) => (
          <p>{val.content}</p>
        ))}
      </div>
    </>
  )
}