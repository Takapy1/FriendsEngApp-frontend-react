import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
import { NUM_EACH_EPISODE } from "../../../constants/episodes";
import { EpisodeUl } from "../../Styled/Episode/StyledEpisodeList";

const EpisodeLi = styled.li`
  margin: 4px;
`

const EpisodeLink = styled(Link)`
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  width: 80px;
  height: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  color: #212529;
  letter-spacing: 0.08em;

  border-radius: 0.5rem;

  &:hover {
    color: #fff;
    background: #000;
  }
`


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
              <EpisodeLi key={`episode${val}`}>
                <EpisodeLink to={`/seasons/${seasonId}/episodes/${val}`}>Episode {val}</EpisodeLink>
              </EpisodeLi> 
            )
          })}
        </EpisodeUl>
      </div>
    </>
  )
}