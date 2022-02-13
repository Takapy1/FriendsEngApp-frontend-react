import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Home } from "./page/Home/Home";
import { SeasonList } from "./page/Season/SeasonList";
import { ShowEpisode } from "./page/Episode/ShowEpisode";
import { EpisodeList } from "./page/Episode/EpisodeList";
import { Header } from './ui/Header/Header'

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