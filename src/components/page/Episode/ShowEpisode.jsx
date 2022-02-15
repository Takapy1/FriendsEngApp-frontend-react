import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import { SideBar } from "../../ui/SideBar/SideBar";
import { ActiveLine } from "../../ui/Line/ActiveLine";
import { Main, Wrapper } from "../../Styled/Episode/StyledShowEpisode";

const Line = styled.div`
  border: solid black;
  margin: 3px;
`

export const ShowEpisode = () => { 
  const seasonId = useParams().seasonId;
  const episodeId = useParams().id;
  const [activeLineID, setActiveLineID] = useState(null);
  const [activeWordIndex, setActiveWordIndex] = useState(null);
  const [lines, setLines] = useState([]);

  
  const [activeWord, setActiveWord] = useState(null);

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
    // console.log(index);
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
      <Link to={`/seasons/${seasonId}/episodes`}>Episode一覧に戻る</Link>
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