import React, { useState } from "react";
import styled from 'styled-components'

const Line = styled.div`
  border: solid black;
  margin: 8px 0;
  background-color: #7FFFD4;
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

export const ActiveLine = ({lineID, line, onLineClick, handleActiveWord, handleMeaningList}) => {
  const splitLine = (line) => {
    return line.replaceAll("　", " ").split(" ")
  }

  
  const makeWordSpans = (words) => {
    const wordSpanList = {};
    for (let i = 0; i < words.length; i++) {
      wordSpanList[i] = <WordSpan key={`word${i}`} onClick={ () => handleClickWord(i) }>{words[i]} </WordSpan>
    }
    return wordSpanList
  }
  
  const wordList = splitLine(line);
  const [wordSpans, setWordSpans] = useState(makeWordSpans(wordList));

  // const changeWordsToWordSpans = (words) => {
  //   for (let i = 0; i < words.length; i++) {
  //       // wordSpans.push(<span key={`word${i}`} onClick={ () => handleClickWord(i) }>{words[i]} </span>)
  //       setWordSpans({ ...wordSpans, i: <span key={`word${i}`} onClick={ () => handleClickWord(i) }>{words[i]} </span>})
  //     }
  //   // let wordSpans = []
  //   // for (let i = 0; i < words.length; i++) {
  //   //   wordSpans.push(<span key={`word${i}`} onClick={ () => handleClickWord(i) }>{words[i]} </span>)
  //   // }
  //   // return wordSpans;
  // }

  const handleClickWord = (num) => {
    // setActiveWord(wordList[num]);
    // setactiveWordIndex(num);
    handleActiveWord(wordList[num], num);
    handleMeaningList(num);
    setWordSpans({...wordSpans, [num]: <ActiveWordSpan key={`word${num}`} onClick={ () => handleClickWord(num) }>{wordList[num] }</ActiveWordSpan>})
  }
  
  const getWordSpan = (i) => {
    return wordSpans[i];
  }
  // const [activeWord, setActiveWord] = useState(null);
  // const [activeWordIndex, setactiveWordIndex] = useState(null);

  // useLayoutEffect( () => {
  //   changeWordsToWordSpans(wordList);
  // }, [activeWord, activeWordIndex])
  

  return (
    <>
      <Line key={`line${lineID}`} id={`line${lineID}`} onClick={() => onLineClick(lineID)}>
        { console.log(wordSpans) }
        { Object.keys(wordSpans).map((_ws, i) =>  getWordSpan(i) ) }
      </Line>
    </>
  )

}

