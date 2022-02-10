import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 40 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  padding-top: 30px;
`

export const Main = styled.div`
  width: 75%;
`

export const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: #1E90FF;
  color: #fff;
  text-align: center;
  cursor: pointer;
  ${({ disabled }) => disabled && ` 
    opacity: 0.5;
    cursor: default;
  `}
`