import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from "../Styled/StyledComponents";

const SideBarField = styled.div`
  position: sticky;
  top: 0; 
  width: 25%;
  height: 300px;
  background-color: bisque;
`

const FormGroup = styled.div`
  
`


export const SideBar = () => {

  return (
    <SideBarField>
      <form>
        <FormGroup>
          <label>単語</label><br></br>
          <input type="text"></input>
        </FormGroup>
        <br></br>
        <FormGroup>
          <label>意味</label><br></br>
          <input type="text"></input>
        </FormGroup>
        <br></br>
        <Button>登録</Button>
      </form>
    </SideBarField>
  )
}