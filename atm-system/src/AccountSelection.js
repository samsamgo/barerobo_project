import React, { useState } from "react";
import styled from "styled-components";

function AccountSelection({ onSelect }) {
  const [selectedAccount, setSelectedAccount] = useState("checking");

  const handleSelect = (e) => {
    setSelectedAccount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelect(selectedAccount);
  };

  return (
    <div>
      <AccountSelectiondiv>
        <form onSubmit={handleSubmit}>
          <label>
            <select value={selectedAccount} onChange={handleSelect}>
              <option value="checking">농협은행</option>
              <option value="savings">증권 QV종합 매매</option>
            </select>
          </label>
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </AccountSelectiondiv>
    </div>
  );
}

export default AccountSelection;

const AccountSelectiondiv = styled.div`
  width: 1400px;
  height: 700px;
  position: relative;
  margin-left: 30px;
  background-color: white;
  border-radius: 30px;
  border: 5px solid rgba(135, 206, 235, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    label {
      select {
        border-radius: 30px;
        border: 5px solid rgba(135, 206, 235, 0.8);
        width: 500px;
        height: 100px;
        font-size: 40px;
        padding-left: 20px;
      }
    }
  }
  button {
    position: absolute;
    right: 50px;
    bottom: 50px;
    margin-top: auto;
    width: 300px;
    height: 70px;
    border-radius: 30px;
    border: 5px solid rgba(135, 206, 235, 0.8);
    background-color: white;
    font-size: 30px;
    &:hover {
      font-weight: bold;
      background-color: rgba(135, 206, 235, 0.8);
      color: white;
    }
  }
`;
