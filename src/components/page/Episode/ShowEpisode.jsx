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
  const [lines, setLines] = useState([]);
  const [activeLineID, setActiveLineID] = useState(null);
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

  return (
    <>
      <h1>Season {seasonId}, Episode {episodeId}</h1>
      <Link to={`/seasons/${seasonId}/episodes`}>Episode一覧に戻る</Link>
      <Wrapper>
        <Main>
          { lines.map(v => 
            <Line 
                  lineID={v.id} 
                  line={v.content} 
                  activeFlag={activeLineID === v.id}
                  //Lineコンポーネント内で、setActiveLineID, setActiveWordIndex をキックさせる
      
                  onLineClick={(id) => setActiveLineID(id)} 
                  handleActiveWord={(word, i) => setActiveWordIndex(word, i)} />
          )}
        </Main>
        <SideBar 
            activeLineID={activeLineID} 
            //activeWord は SideBar コンポーネント内で取得する
            activeWordIndex={activeWordIndex} 
            //meaningList は SideBar コンポーネント内で取得する
            //addNerMeaning は SideBar コンポーネント内で実装する
            />
      </Wrapper>
    </>
  )
}
