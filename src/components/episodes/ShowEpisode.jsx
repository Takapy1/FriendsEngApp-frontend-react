import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { SideBar } from "../SideBar/SideBar";
import { Main, Wrapper } from "../Styled/StyledComponents";

const Line = styled.div`
  border: solid black;
  margin: 3px;
`

export const ShowEpisode = () => { 
  const seasonId = useParams().seasonId;
  const episodeId = useParams().id;
  const [activeLineNO, setActiveLineNO] = useState(undefined);
  const [lines, setLines] = useState([]);

  useEffect( async() => {
    await axios.get(process.env.REACT_APP_SERVER_URL + `/api/v1/seasons/${seasonId}/episodes/${episodeId}`)
    .then(res => {
      setLines(res.data);
      // console.log(lines);
    })
    .catch(e => {
      console.log(e);
    })
  }, []);

  const handleClickLine = (num) => {
    console.log(num);
    // setActiveLineNO(num)
  }

  return (
    <>
      <h1>Season {seasonId}, Episode {episodeId}</h1>
      <Wrapper>
        <Main>
          {lines.map((val, i) => (
            <Line key={`line${i}`} onClick={() => handleClickLine(i)}>{val.content}</Line>
            ))}
        </Main>
        <SideBar />
      </Wrapper>
    </>
  )
}