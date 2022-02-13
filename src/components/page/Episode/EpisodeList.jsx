import React from "react";
import { Link, useParams } from "react-router-dom";
import { NUM_EACH_EPISODE } from "../../../constants/episodes";
import { EpisodeUl } from "../../Styled/Episode/StyledEpisodeList";

export const EpisodeList = () => {
  const seasonId = useParams().id;
  const links = [...Array(NUM_EACH_EPISODE[seasonId]).keys()].map(i => ++i)

  return (
    <>
      <h1>Season {seasonId}, Episode 一覧</h1>
      <div>
        <EpisodeUl>
          {links.map(val => {
            return(
              <li key={`episode${val}`}>
                <Link to={`/seasons/${seasonId}/episodes/${val}`}>Episode {val}</Link>
              </li> 
            )
          })}
        </EpisodeUl>
      </div>
    </>
  )
}