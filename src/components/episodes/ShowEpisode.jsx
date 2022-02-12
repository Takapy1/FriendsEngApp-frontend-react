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
  const [activeLineID, setActiveLineID] = useState(null);
  const [activeWord, setActiveWord] = useState(null);
  const [activeWordIndex, setActiveWordIndex] = useState(null);
  const [meaningList, setMeaningList] = useState([]);

  useEffect( async() => {
    await axios.get(process.env.REACT_APP_SERVER_URL + `/api/v1/seasons/${seasonId}/episodes/${episodeId}`)
    .then(res => {
      setLines(res.data);
    })
    .catch(e => {
      console.log(e);
    })
  }, []);

  const handleClickLine = (id) => {
    setActiveLineID(id);
  }

  const handleActiveWord = (word, index) => {
    setActiveWord(word);
    setActiveWordIndex(index);
    console.log(index);
  }

  const handleMeaningList = async(index) => {
    console.log(activeWordIndex);
    await axios.get(process.env.REACT_APP_SERVER_URL + `/api/v1/lines/${activeLineID}/words/${index}`)
    .then(res => {
      console.log(res.data);
      setMeaningList(res.data);
    })
    .catch(e => {
      console.log(e);
      setMeaningList([]);
    })
  }

  const getLine = (v) => {
    if (activeLineID === v.id) {
      return <ActiveLine 
                  lineID={v.id} 
                  line={v.content} 
                  onLineClick={(id) => handleClickLine(id)} 
                  handleActiveWord={(word, i) => handleActiveWord(word, i)}
                  handleMeaningList={(num) => handleMeaningList(num) } />
    } else {
      return <Line key={`line${v.id}`} id={`line${v.id}`} onClick={() => handleClickLine(v.id)}>{v.content}</Line>;
    }
  }

  const addNewMeaning = (meaning) => {
    setMeaningList(meaning);
  }

  return (
    <>
      <h1>Season {seasonId}, Episode {episodeId}</h1>
      <Wrapper>
        <Main>
          { lines.map(val => getLine(val)) }
        </Main>
        <SideBar 
            activeLineID={activeLineID} 
            activeWord={activeWord} 
            activeWordIndex={activeWordIndex} 
            meaningList={meaningList}
            addNewMeaning={(m) => addNewMeaning(m)} />
      </Wrapper>
    </>
  )
}