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

const ActiveLine = styled.div`
  border: solid black;
  margin: 3px;
  background-color: #7FFFD4;
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
    })
    .catch(e => {
      console.log(e);
    })
  }, []);

  const handleClickLine = (num) => {
    setActiveLineNO(num)
  }

  const getLine = (v, i) => {
    if (activeLineNO == i) {
      return <ActiveLine key={`line${i}`} onClick={() => handleClickLine(i)}>{v.content}</ActiveLine>;
    } else {
      return <Line key={`line${i}`} onClick={() => handleClickLine(i)}>{v.content}</Line>;
    }
  }

  return (
    <>
      <h1>Season {seasonId}, Episode {episodeId}</h1>
      <Wrapper>
        <Main>
          { lines.map((val, i) => getLine(val, i)) }
        </Main>
        <SideBar />
      </Wrapper>
    </>
  )
}