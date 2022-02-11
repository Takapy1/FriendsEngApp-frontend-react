import React, { Component, useLayoutEffect, useState } from "react";
// import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components'

const Line = styled.div`
  border: solid black;
  margin: 3px;
  background-color: #7FFFD4;
`
const NormalWord = styled.span`

`
const ActiveWord = styled.span`
  background-color: #DC143C;
`

export const ActiveLine = ({lineID, line, onLineClick, handleActiveWord}) => {
  const [activeWordNO, setActiveWordNO] = useState(null);

  const splitLine = (line) => {
    return line.replaceAll("　", " ").split(" ")
  }

  // 各単語をspanで囲む
  const changeWordsToWordSpans = (words) => {
    let wordSpans = []
    for (let i = 0; i < words.length; i++) {
      wordSpans.push(<span key={`word${i}`} onClick={ () => handleClickWord(i) }>{words[i]} </span>)
    }
    return wordSpans;
  }

  const getWordSpan = (i) => {
    return wordSpans[i];
  }

  const handleClickWord = (num) => {
    console.log(wordList[num]);
    handleActiveWord(wordList[num]);
  }

  const wordList = splitLine(line);
  const numWords = wordList.length;
  const wordSpans = changeWordsToWordSpans(wordList);

  return (
    <>
      <Line key={`line${lineID}`} onClick={() => onLineClick(lineID)}>
        { wordSpans.map((_ws, i) =>  getWordSpan(i) ) }
      </Line>
    </>
  )

  // const joinWordSpans = () => {
  //   wordSpans.join(" ");
  // }

  // activeWordかどうかで変換するものを分ける
  // const getWord = (word, idx) => {
  //   if (activeWordNO == idx) {
  //     <ActiveWord>{word}</ActiveWord>
  //   } else {
  //     <NormalWord>{word}</NormalWord>
  //   }
  // }

}

