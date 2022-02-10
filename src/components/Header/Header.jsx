import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  color: white;
  width: 100%;
  height: 30px;
  padding: 30px 4% 10px;
  background-color: rgb(82, 78, 78);
  margin-bottom: 20px;

  /* 画面上部に固定 */
  /* position: fixed; 
  top: 0; */

  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  
`

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
`

const NavLink = styled.li`
  margin: 0 0 0 15px;
  font-size: 14px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

export const Header = () => {
  return (
    <StyledHeader>
      <h1><StyledLink to="/seasons">Friensing!</StyledLink></h1>
      <Nav className="header-nav">
        <NavLinks>
          <NavLink><StyledLink to="/seasons">Season一覧</StyledLink></NavLink>
          <NavLink><StyledLink to="#">単語帳</StyledLink></NavLink>
        </NavLinks>
      </Nav>
    </StyledHeader>
  )
}