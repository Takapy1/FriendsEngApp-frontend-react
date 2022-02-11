import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { SideBar } from "../SideBar/SideBar";
import { ActiveLine } from "../Lines/ActiveLine";
import { Main, Wrapper } from "../Styled/StyledComponents";

const Line = styled.div`
  border: solid black;
  margin: 3px;
`

export const ShowEpisode = () => { 
  const seasonId = useParams().seasonId;
  const episodeId = useParams().id;
  const [lines, setLines] = useState([]);
  const [activeLineNO, setActiveLineNO] = useState(null);
  const [activeWord, setActiveWord] = useState(null);

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
    setActiveLineNO(num);
  }

  const handleActiveWord = (word) => {
    setActiveWord(word);
  }

  const getLine = (v, i) => {
    if (activeLineNO === i) {
      return <ActiveLine LineNO={v.id} line={v.content} onLineClick={() => handleClickLine(i)} handleActiveWord={(word) => handleActiveWord(word)} />
    } else {
      return <Line key={`line${v.id}`} onClick={() => handleClickLine(i)}>{v.content}</Line>;
    }
  }

  return (
    <>
      <h1>Season {seasonId}, Episode {episodeId}</h1>
      <Wrapper>
        <Main>
          { lines.map((val, i) => getLine(val, i)) }
        </Main>
        <SideBar activeWord={activeWord} />
      </Wrapper>
    </>
  )
}