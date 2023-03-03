import React, { useState } from "react";
import styled from "styled-components";

function Transaction({ type, balance, onComplete }) {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleButtonClick = (digit) => {
    setAmount(amount + digit);
  };

  const handleXlick = () => {
    setAmount("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isNaN(amount)) {
      alert("Please enter a valid amount.");
    } else if (type === "withdraw" && amount > balance) {
      alert("Insufficient funds.");
    } else if (amount <= 0) {
      alert("Please enter a valid amount.");
    } else {
      onComplete(amount);
    }
  };

  return (
    <>
      <Transactiondiv>
        <Keypaddiv>
          <valuediv>
            {type === "withdraw" ? "출금" : "입금"}하실 금액을 선택해 주세요
          </valuediv>

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
            <keybutton onClick={() => handleButtonClick("00")}>00</keybutton>
            <keybutton onClick={() => handleButtonClick("0")}>0</keybutton>
            <keybutton onClick={() => handleButtonClick("000")}>000</keybutton>
          </keydiv>
        </Keypaddiv>
        <Oupputdiv>
          <form onSubmit={handleSubmit}>
            <label>
              <input type="text" value={amount} onChange={handleAmountChange} />
              <dallardiv>$</dallardiv>
            </label>
          </form>
          <buttondiv>
            <button onClick={() => window.location.reload()}>취소</button>
            <button onClick={handleSubmit}>
              {type === "withdraw" ? "출금" : "입금"}
            </button>
          </buttondiv>
        </Oupputdiv>
      </Transactiondiv>
    </>
  );
}

export default Transaction;

const Keypaddiv = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  valuediv {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
  }
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
      display: flex;
      flex-direction: row;
      position: relative;
      input {
        margin: 80px 25px;
        font-size: 30px;
        font-weight: 700;
        padding-left: 20px;
        width: 400px;
        height: 70px;
        border-radius: 30px;
        border: 5px solid rgba(135, 206, 235, 0.8);
      }
      dallardiv {
        position: absolute;
        color: black;
        font-size: 30px;
        right: 0px;
        bottom: 98px;
        font-weight: 700;
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

const Transactiondiv = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
`;
