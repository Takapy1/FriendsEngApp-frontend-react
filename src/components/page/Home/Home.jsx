import React from "react";
import { Link } from "react-router-dom";

export const Home = () => { 

  return (
    <>
      <p>ようこそ「Frineds」へ</p>
      <Link to="/seasons">シーズン一覧へ</Link>
    </>
   
  )
}