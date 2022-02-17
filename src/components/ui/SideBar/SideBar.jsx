import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { Button } from "../Button/Button";

const SideBarField = styled.div`
  position: sticky;
  top: 0; 
  width: 25%;
  height: 300px;
  background-color: #e7efff;
  text-align: center;
`

const FormGroup = styled.div`
`

const WordLabel = styled.label`
  font-weight: bold;
`

const WordField = styled.input`
  font-size: 100%;
`

const MeaningLabel = styled.label`
  font-weight: bold;
`

const MeaningField = styled.input`
  font-size: 100%;
`

export const SideBar = ({activeLineID, activeWordIndex, meaningList, addNewMeaning}) => {

  const initialWordState = {
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
      // console.log(res);
      addNewMeaning(res.data);
      resetMeaingField();
    })
    .catch(e => {
      console.log(e);
    })
  };

  const getActiveWord = () => {
    if (activeLineID != null && activeWordIndex != null) {
      const activeWord = document.getElementById(`line${activeLineID}`).querySelector(`#word${activeWordIndex}`);
      return activeWord === null ? null : activeWord.textContent;
    }
  }

  useEffect(() => {
    setWord( {...word, content: getActiveWord(), indexOfLine: activeWordIndex} )
  }, [activeLineID, activeWordIndex]);

  return (
    <SideBarField>
      <FormGroup>
        <WordLabel>単語</WordLabel><br></br>
        <WordField type="text" value={word.content} name="content" onChange={handleInputChanged}></WordField>
      </FormGroup>
      <br></br>
      <FormGroup>
        <MeaningLabel>意味</MeaningLabel><br></br>
        <MeaningField type="text" value={word.meaning} name="meaning" onChange={handleInputChanged}></MeaningField>
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