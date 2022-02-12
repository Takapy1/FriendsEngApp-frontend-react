import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from "../Styled/StyledComponents";

const SideBarField = styled.div`
  position: sticky;
  top: 0; 
  width: 25%;
  height: 300px;
  background-color: bisque;
`

const FormGroup = styled.div`
  
`

export const SideBar = ({activeLineID, activeWord, activeWordIndex, meaningList, addNewMeaning}) => {

  const initialWordState = {
    lineID: null,
    indexOfLine: null,
    content: "",
    meaning: "",
  };
  const [word, setWord] = useState(initialWordState);

  const handleInputChanged = event => {
    const { name, value } = event.target;
    setWord({ ...word, [name]: value });
  };

  const resetMeaingField = () => {
    setWord({ ...word, meaning: "" });
  }

  const saveWord = () => {
    const data = {
      line_id: activeLineID,
      index_of_line: activeWordIndex,
      content: word.content,
      meaning: word.meaning,
    };

    axios.post(process.env.REACT_APP_SERVER_URL + '/api/v1/words', data)
    .then(res => {
      console.log(res);
      addNewMeaning(res.data);
      resetMeaingField();
    })
    .catch(e => {
      console.log(e);
    })
  };

  useEffect(() => {
    setWord( {...word, content: activeWord, indexOfLine: activeWordIndex} )

    // getWord(activeLineID, activeWordIndex);
    //ActiveWordに紐づく意味とかを持っていくる。
    // getMeanings()
  }, [activeWord, activeWordIndex]);

  return (
    <SideBarField>
      <FormGroup>
        <label>単語</label><br></br>
        <input type="text" value={word.content} name="content" onChange={handleInputChanged}></input>
      </FormGroup>
      <br></br>
      <FormGroup>
        <label>意味</label><br></br>
        <input type="text" value={word.meaning} name="meaning" onChange={handleInputChanged}></input>
      </FormGroup>
      <br></br>
      <Button onClick={saveWord}>登録</Button>
      <div>
        <ul>
          { meaningList.meaning }
          {/* { meaningList.map(meaning => <li>{meaning}</li>) } */}
        </ul>
      </div>
    </SideBarField>
  )
}