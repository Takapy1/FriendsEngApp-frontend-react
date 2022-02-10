import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from "./homes/Home";
import { SeasonList } from "./seasons/SeasonList";
import { ShowEpisode } from "./episodes/ShowEpisode";
import { EpisodeList } from "./episodes/EpisodeList";
import { Header } from './Header/Header'
// import "../App.css";



export const App = () => {

  return (
    <>
      <Header />
      
      
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/seasons" element={<SeasonList/> } />
        <Route path="/seasons/:id/episodes" element={<EpisodeList/> }/>
        <Route path="/seasons/:seasonId/episodes/:id" element={<ShowEpisode/> } />
      </Routes>
    </>
  )
}