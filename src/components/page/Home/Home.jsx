import React from "react";
import { Link } from "react-router-dom";

export const Home = () => { 

  return (
    <>
      <h1>ようこそ「Frineds」へ</h1>
      <Link to="/seasons">シーズン一覧へ</Link>
    </>
  )
}