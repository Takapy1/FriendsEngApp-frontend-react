import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { SeasonUl} from '../../Styled/Season/StyledSeasonList'

const SeasonLi = styled.li`
  margin: 4px;
`

const SeasonLink = styled(Link)`
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  width: 80px;
  height: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  color: #212529;
  letter-spacing: 0.08em;

  border-radius: 0.5rem;

  &:hover {
    color: #fff;
    background: #000;
  }
`

export const SeasonList = () => {

  return (
    <>
      <div>
        <h1>Season 一覧</h1>

        <SeasonUl>
          <SeasonLi><SeasonLink to={'/seasons/1/episodes'}>Season 1</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/2/episodes'}>Season 2</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/3/episodes'}>Season 3</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/4/episodes'}>Season 4</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/5/episodes'}>Season 5</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/6/episodes'}>Season 6</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/7/episodes'}>Season 7</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/8/episodes'}>Season 8</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/9/episodes'}>Season 9</SeasonLink></SeasonLi>
          <SeasonLi><SeasonLink to={'/seasons/10/episodes'}>Season 10</SeasonLink></SeasonLi>
        </SeasonUl>
      </div>
    </>
  )
}
