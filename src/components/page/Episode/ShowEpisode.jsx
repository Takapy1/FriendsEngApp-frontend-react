import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import { SideBar } from "../../ui/SideBar/SideBar";
import { Line } from "../../ui/Line/Line";
import { Main, Wrapper } from "../../Styled/Episode/StyledShowEpisode";


export const ShowEpisode = () => { 
  const seasonId = useParams().seasonId;
  const episodeId = useParams().id;
  const [activeLineID, setActiveLineID] = useState(null);
  const [activeWordIndex, setActiveWordIndex] = useState(null);
  const [lines, setLines] = useState([]);

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
    // setActiveWordIndex(null);
    setActiveLineID(id);
  }

  const handleActiveWordIndex = (index) => {
    setActiveWordIndex(index);
  }

  const handleMeaningList = async(index) => {
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

  const addNewMeaning = (meaning) => {
    setMeaningList(meaning);
  }

  return (
    <>
      <h1>Season {seasonId}, Episode {episodeId}</h1>
      <Link to={`/seasons/${seasonId}/episodes`}>Episode一覧に戻る</Link>
      <Wrapper>
        <Main>
          { lines.map(line => 
            <Line
              lineID={line.id}
              line={line.content}
              isActive={activeLineID === line.id}
              activeWordIndex={activeWordIndex}
              onLineClick={(id) => handleClickLine(id)}
              handleActiveWordIndex={(i) => handleActiveWordIndex(i)}
              handleMeaningList={(num) => handleMeaningList(num)}
            />
          )}
        </Main>
        <SideBar
            activeLineID={activeLineID} 
            // activeWord={activeWord} 
            activeWordIndex={activeWordIndex} 
            meaningList={meaningList}
            addNewMeaning={(m) => addNewMeaning(m)} />
      </Wrapper>
    </>
  )
}