import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Root = styled.div`
  width:100%;
  padding:${(p) => p.theme.newspacing.md} ${(p) => p.theme.spacing.lg};
  background-color:${(p) => p.theme.colors.SectionBackgroundColor};
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  position:sticky;
  top:0;
`;

const LogoContainer = styled(Link)`
 color:${(p) => p.theme.colors.white};
 font-size:${(p) => p.theme.font.size.md};
 font-weight:${(p) => p.theme.font.weight.bold};
 text-decoration:none;
`
const LinkContainer = styled.div`

`;

const LinkText = styled(Link)`
color:${(p) => p.theme.colors.skyColor};
text-decoration:none;
font-weight:${(p) => p.theme.font.weight.bold};
`;
const Navbar = () => {

  return (
    <Root>
    <LogoContainer to="/">
        Smart Contract Project
    </LogoContainer>
    <LinkContainer>
      <LinkText to="/transactions">Transactions</LinkText>
    </LinkContainer>
    </Root>
  );
};

export default Navbar;
