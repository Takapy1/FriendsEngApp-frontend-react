import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";

export const EpisodeList = () => {
  const [numEpisodes, setNumEpisodes] = useState();
  const [links, setLinks] = useState([]);
  const seasonId = useParams().id;

  useEffect( () => {
    axios.get(process.env.REACT_APP_SERVER_URL + `/api/v1/seasons/${seasonId}/episodes`)
    .then(res => {
      console.log(res.data.data.length);
      setNumEpisodes(res.data.data.length);
      setLinks([...Array(numEpisodes).keys()]);
    })
    .catch(e => {
      console.log(e);
    });
  }, [])

  return (
    <>
      <h1>Season {seasonId}, Episode一覧</h1>
      <div>
        {links.map(val => {
          return(
            <div>
              <Link to={`/seasons/1/episodes/${val+1}`}>Episode {val + 1}</Link>
            </div> 
          )
        })}
      </div>
    </>
  )
}