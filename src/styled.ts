import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Form = styled.div`
flex-direction: column;
display: flex;
padding: 100px;
`;

export const InputText = styled.input`
  margin: 10px;
  width: 100%;
  height: 40px;
`;

export const InputSelectData = styled.select`
  margin: 10px;
  width: 100%;
  height: 40px;
`;

export const ButtomContainer = styled.div`
display: flex;
flex: 1;
width: 100%;
align-items: flex-start;
padding: 10px;
`;

export const ButtomCalcular = styled.button`
  width: 150px;
  height: 40px;
  background-color: blue;
  &:hover{
    background-color: lightblue;
    color: black;
  }
  color: white;
`;

export const Resultado = styled.div`
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
justify-content: center;
margin-top: 10px;
padding: 5;
`;

export const AlertError = styled.p`
color: red;
text-align: center;
`;