import React from "react";
import styled from "styled-components";
function Balance({ balance, onTransactionSelected }) {
  return (
    <>
      <Balancediv>
        <cbal>잔액: ${balance}</cbal>
        <buttondiv>
          <button onClick={() => onTransactionSelected("withdraw")}>
            출금
          </button>
          <button onClick={() => window.location.reload()}>취소</button>
          <button onClick={() => onTransactionSelected("deposit")}>입금</button>
        </buttondiv>
      </Balancediv>
    </>
  );
}

export default Balance;

const Balancediv = styled.div`
  width: 1400px;
  height: 700px;
  position: relative;
  margin-left: 30px;
  background-color: white;
  border-radius: 30px;
  border: 5px solid rgba(135, 206, 235, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  cbal {
    margin: 60px 0px;
    font-size: 50px;
    font-weight: bold;
  }
  buttondiv {
    display: flex;
    flex-direction: row;
    width: 800px;
    height: 100px;
    margin-top: 300px;
    button {
      flex-grow: 1;
      margin: 0px 20px;
      font-size: 30px;
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
