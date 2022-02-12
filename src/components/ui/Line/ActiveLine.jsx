import React from "react";
import styled from 'styled-components'

const Line = styled.div`
  border: solid black;
  margin: 3px;
  background-color: #7FFFD4;
`

export const ActiveLine = ({lineID, line, onLineClick, handleActiveWord, handleMeaningList}) => {

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
    handleActiveWord(wordList[num], num);
    handleMeaningList(num);
  }

  const wordList = splitLine(line);
  const wordSpans = changeWordsToWordSpans(wordList);

  return (
    <>
      <Line key={`line${lineID}`} id={`line${lineID}`} onClick={() => onLineClick(lineID)}>
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

