import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SeasonUl = styled.ul`
  list-style: none;
  margin: 0;
`

export const SeasonList = () => { 
  
  return (
    <>
      <div>
        <p>season list page</p>
        
        <SeasonUl>
          <li><Link to={'/seasons/1/episodes'}>Season 1</Link></li>
          <li><Link to={'/seasons/2/episodes'}>Season 2</Link></li>
          <li><Link to={'/seasons/3/episodes'}>Season 3</Link></li>
          <li><Link to={'/seasons/4/episodes'}>Season 4</Link></li>
          <li><Link to={'/seasons/5/episodes'}>Season 5</Link></li>
          <li><Link to={'/seasons/6/episodes'}>Season 6</Link></li>
          <li><Link to={'/seasons/7/episodes'}>Season 7</Link></li>
          <li><Link to={'/seasons/8/episodes'}>Season 8</Link></li>
          <li><Link to={'/seasons/9/episodes'}>Season 9</Link></li>
          <li><Link to={'/seasons/10/episodes'}>Season 10</Link></li>
        </SeasonUl>
      </div>
    </>
  )
}
