import React, { useState } from "react";
import styled from "styled-components";

function PinInput({ onSubmit }) {
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pin);
  };

  const handleButtonClick = (digit) => {
    setPin(pin + digit);
  };

  const handleXlick = () => {
    setPin("");
  };

  const handleChange = (e) => {
    setPin(e.target.value);
  };

  return (
    <>
      <PinInputdiv>
        <Keypaddiv>
          <keydiv>
            <keybutton onClick={() => handleButtonClick("1")}>1</keybutton>
            <keybutton onClick={() => handleButtonClick("2")}>2</keybutton>
            <keybutton onClick={() => handleButtonClick("3")}>3</keybutton>
          </keydiv>
          <keydiv>
            <keybutton onClick={() => handleButtonClick("4")}>4</keybutton>
            <keybutton onClick={() => handleButtonClick("5")}>5</keybutton>
            <keybutton onClick={() => handleButtonClick("6")}>6</keybutton>
          </keydiv>
          <keydiv>
            <keybutton onClick={() => handleButtonClick("7")}>7</keybutton>
            <keybutton onClick={() => handleButtonClick("8")}>8</keybutton>
            <keybutton onClick={() => handleButtonClick("9")}>9</keybutton>
          </keydiv>
          <keydiv>
            <keybutton onClick={() => handleButtonClick("0")}>0</keybutton>
          </keydiv>
        </Keypaddiv>
        <Oupputdiv>
          <form onSubmit={handleSubmit}>
            <label>
              <input type="password" value={pin} onChange={handleChange} />
            </label>
          </form>
          <buttondiv>
            <button onClick={() => handleXlick()}>X</button>
            <button onClick={handleSubmit}>O</button>
          </buttondiv>
        </Oupputdiv>
      </PinInputdiv>
    </>
  );
}

export default PinInput;

const Keypaddiv = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  keydiv {
    display: flex;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    keybutton {
      display: flex;
      flex-grow: 1;
      background-color: white;
      margin: 3px 3px;
      border-radius: 30px;
      border: 5px solid rgba(135, 206, 235, 0.8);
      font-size: 30px;
      font-weight: 900;
      color: rgba(135, 206, 235, 0.8);
      align-items: center;
      justify-content: center;
      &:hover {
        font-weight: bold;
        background-color: rgba(135, 206, 235, 0.8);
        color: white;
      }
    }
  }
`;

const Oupputdiv = styled.div`
  width: 400px;
  height: 700px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  form {
    label {
      input {
        margin: 80px 25px;
        font-size: 30px;
        font-weight: 900;
        padding-left: 15px;
        width: 400px;
        height: 70px;
        border-radius: 30px;
        border: 5px solid rgba(135, 206, 235, 0.8);
      }
    }
  }
  buttondiv {
    display: flex;
    flex-direction: row;
    margin-top: 300px;
    button {
      flex-grow: 1;
      height: 150px;
      margin: 0px 20px;
      font-size: 50px;
      font-weight: 900;
      background-color: white;
      border-radius: 30px;
      border: 5px solid rgba(135, 206, 235, 0.8);
      color: rgba(135, 206, 235, 0.8);
      &:hover {
        font-weight: bold;
        background-color: rgba(135, 206, 235, 0.8);
        color: white;
      }
    }
  }
`;

const PinInputdiv = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
`;
