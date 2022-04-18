import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import styled from "styled-components";
import { Heading } from "./styledComponent/WelcomeStyleComponent";
import TransactionsCard from "./TransactionsCard";

const Root = styled.div`
  width:1200px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  @media(max-width:1240px){
    width:100%;
    padding:${(p) => p.theme.spacing.sm};
  }
`;
const EmptyWrapper = styled.div`
  text-align:center;
  margin:${(p) => p.theme.spacing.sm};
  font-size:${(p) => p.theme.font.size.md};
`;
const TransactionWrapper = styled.div`
 width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
`;

const HeadingWrapper = styled.div`
display:flex;
width:100%;
justify-content:space-between;
padding:${(p) => p.theme.spacing.sm};
`;

const HeadingData = styled.div`
 font-size:${(p) => p.theme.font.size.md};
 font-weight:${(p) => p.theme.font.weight.bold};
 width:20%;
 text-align:left;
`;

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <Root>
        {currentAccount ? (
          <Heading>
            Latest Transactions
          </Heading>
        ) : (
          <EmptyWrapper>
               Connect your account to see the latest transactions
          </EmptyWrapper>
        )}

        {transactions.length <= 0 && <>Transactions Not Available</>}

        <TransactionWrapper>
          <HeadingWrapper>
              <HeadingData>
                   From Address
              </HeadingData>
              <HeadingData>
                   To Address
              </HeadingData>
              <HeadingData>
                   Token
              </HeadingData>
              <HeadingData>
                   Message
              </HeadingData>
              <HeadingData>
                  Date and time
              </HeadingData>
          </HeadingWrapper>
          {transactions.reverse().map((transaction, i) => (
            <TransactionsCard key={i} transaction={transaction} />
          ))}
        </TransactionWrapper>
    </Root>
  );
};

export default Transactions;
