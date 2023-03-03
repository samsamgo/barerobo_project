import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import PinInput from "./PinInput";
import AccountSelection from "./AccountSelection";
import Transaction from "./Transaction";
import Balance from "./Balance";

function App() {
  const [pin, setPin] = useState(null);
  const [click, setclick] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [transactionType, setTransactionType] = useState(null);

  const handlePinSubmit = (enteredPin) => {
    if (enteredPin === "1234") {
      setPin(enteredPin);
    } else {
      alert("비밀번호가 틀렸습니다.");
      window.location.reload();
    }
  };

  const handleAccountSelection = (selectedAccount) => {
    setAccount(selectedAccount);
    setBalance(1000);
  };

  const handleTransactionSelection = (type) => {
    setTransactionType(type);
  };

  const handleTransactionComplete = (amount) => {
    if (transactionType === "withdraw") {
      setBalance((prevBalance) => prevBalance - amount);
    } else if (transactionType === "deposit") {
      setBalance((prevBalance) => parseInt(prevBalance) + parseInt(amount));
    }

    setTransactionType(null);
  };

  return (
    <>
      <GlobalStyle />
      <Appdiv>
        {!click && (
          <Buttondiv
            onClick={() => {
              setclick(!click);
            }}
          >
            <clickdiv>Please insert your card</clickdiv>
          </Buttondiv>
        )}

        {click && !pin && <PinInput onSubmit={handlePinSubmit} />}
        {click && pin && !account && (
          <AccountSelection onSelect={handleAccountSelection} />
        )}
        {click && pin && account && !transactionType && (
          <Balance
            balance={balance}
            onTransactionSelected={handleTransactionSelection}
          />
        )}
        {click && pin && account && transactionType && (
          <Transaction
            type={transactionType}
            balance={balance}
            onComplete={handleTransactionComplete}
          />
        )}
      </Appdiv>
    </>
  );
}

export default App;

const Buttondiv = styled.div`
  cursor: pointer;
  animation: showHide 2s linear infinite;
  @keyframes showHide {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  clickdiv {
    font-size: 50px;
    color: white;
  }
  :hover {
    animation: pulse 2s infinite;
  }
`;

const Appdiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media screen and (max-width: 767px) {
    .header {
      font-size: 16px;
    }
  }

  /* 태블릿 화면 */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .header {
      font-size: 20px;
    }
  }

  /* 데스크탑 화면 */
  @media screen and (min-width: 1024px) {
    .header {
      font-size: 24px;
    }
  }
}
  `;
