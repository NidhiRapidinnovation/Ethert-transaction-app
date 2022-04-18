import React from "react";
import styled from "styled-components";
import { shortenAddress } from "../utils/shortenAddress";

const Root = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  background-color:${(p) => p.theme.colors.SectionBackgroundColor};
  padding:${(p) => p.theme.spacing.sm};
  margin-bottom:${(p) => p.theme.spacing.xs};
  border-radius:${(p) => p.theme.radius.xxs};
`;

const Data =styled.div`
width:20%;
display:flex;
align-items:center;
justify-content:left;
`;

const Link =styled.a`
  color:${(p) => p.theme.colors.white};
  text-decoration:none;
`;
const TransactionsCard = ({ transaction }) => {

    return (
      <Root>
           <Data> 
             <Link href={`https://ropsten.etherscan.io/address/${transaction.addressFrom}`} target="_blank" rel="noreferrer">
                {shortenAddress(transaction.addressFrom)}
            </Link>
            </Data>
            <Data>
            <Link href={`https://ropsten.etherscan.io/address/${transaction.addressTo}`} target="_blank" rel="noreferrer">
                {shortenAddress(transaction.addressTo)}
            </Link>
            </Data>
            <Data>{transaction.amount} ETH</Data>
            {transaction.message && (
              <Data>
                 {transaction.message}
              </Data>
            )}
            <Data>{transaction.timestamp}</Data>

      </Root>
    );
  };

  export default TransactionsCard;