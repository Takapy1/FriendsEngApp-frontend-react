import React, { useState } from "react";
import styled from 'styled-components'

const LineDiv = styled.div`
  border: solid black;
  margin: 3px;

  &[data-isActive='true'] {
    margin: 8px 0;
    background-color: #7FFFD4;
  }
`

const WordSpan = styled.span`
  background-color: #20B2AA;
  margin: 2px 2px;
  border-radius: 10px;
  color: black;

  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.25em 0.5em;
  text-decoration: none;
  transition: .4s;

  &:hover {
    cursor: pointer;
    background: #00bcd4;
    color: white;
  }
`

const ActiveWordSpan = styled.span`
  background-color: #FF4500;
  margin: 0 2px;
  border-radius: 10px;
  font-weight: bold;
  padding: 0.25em 0.5em;
  color: white;
`

export const Line = ({lineID, line, isActive, onLineClick, handleActiveWordIndex, handleMeaningList}) => {
  const splitLine = (line) => {
    const lineList = line.replaceAll("　", " ").split(" ");
    if (lineList[lineList.length-1] === '') lineList.pop();
    return lineList;
  }
  
  const makeWordSpans = (words) => {
    const wordSpanList = {};
    for (let i = 0; i < words.length; i++) {
      wordSpanList[i] = <WordSpan key={`word${i}`} id={`word${i}`} onClick={ () => handleClickWord(i) }>{words[i]} </WordSpan>
    }
    return wordSpanList
  }
  
  const wordList = splitLine(line);
  const [wordSpans, setWordSpans] = useState(makeWordSpans(wordList));

  const handleClickWord = (num) => {
    handleActiveWordIndex(num);
    handleMeaningList(num);
    setWordSpans({...wordSpans, [num]: <ActiveWordSpan key={`word${num}`} id={`word${num}`} onClick={ () => handleClickWord(num) }>{wordList[num] }</ActiveWordSpan>})
  }
  
  const getWordSpan = (i) => {
    return wordSpans[i];
  }

  return (
    <>
      <LineDiv data-isActive={isActive} key={`line${lineID}`} id={`line${lineID}`} onClick={() => onLineClick(lineID)}>
        { isActive ? Object.keys(wordSpans).map((_ws, i) =>  getWordSpan(i) ) : line }
      </LineDiv>
    </>
  )

}

