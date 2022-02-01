import React, { Component, useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from "./homes/Home";
import { SeasonList } from "./seasons/SeasonList";
import { ShowEpisode } from "./episodes/ShowEpisode";
import { EpisodeList } from "./episodes/EpisodeList";
import axios from "axios";
// import "../App.css";

export const App = () => {

  return (
    <>
      <h1>Appコンポーネントに来ました。</h1>
      <p></p>

      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/seasons" element={<SeasonList/> } />
        <Route path="/seasons/:id/episodes" element={<EpisodeList/> }/>
        <Route path="/seasons/:season_id/episodes/:id" element={<ShowEpisode/> } />
      </Routes>
    </>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       text: null
//     };
//   }

//   componentDidMount() {
//     const fetchInit = {
//       method: "GET",
//       headers: { "content-type": "application/json" }
//     };

//     fetch(new URL("hello_world", process.env.REACT_APP_SERVER_URL), fetchInit)
//       .then(response => response.json())
//       .then(response => this.setState(response));
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Response: {this.state.text}</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;