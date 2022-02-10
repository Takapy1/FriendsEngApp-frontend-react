import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import { NUM_EACH_EPISODE } from "../../constants/episodes";

export const EpisodeList = () => {
  const seasonId = useParams().id;
  const links = [...Array(NUM_EACH_EPISODE[seasonId]).keys()].map(i => ++i)

  return (
    <>
      <h1>Season {seasonId}, Episode一覧</h1>
      <div>
        {links.map(val => {
          return(
            <div key={`episode${val}`}>
              <Link to={`/seasons/${seasonId}/episodes/${val}`}>Episode {val}</Link>
            </div> 
          )
        })}
      </div>
    </>
  )
}