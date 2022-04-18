import styled from "styled-components";


export const Root =styled.div`
  width:1200px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:${(p) => p.theme.spacing.md} auto;
  @media(max-width:1240px){
   width:100%;
   padding:${(p) => p.theme.spacing.sm};
  }
`;

export const Heading = styled.div`
  font-size:${(p) => p.theme.font.size.lg};
  font-weight:${(p) => p.theme.font.weight.bold};
  margin:${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.sm} 0;
`;

export const Form = styled.form`
 width:500px;
 margin:0 auto;
 background-color:${(p) => p.theme.colors.SectionBackgroundColor};
 display:flex;
 flex-direction:column;
 align-items:center;
 padding:${(p) => p.theme.spacing.md};
 border-radius:${(p) => p.theme.radius.sm};

 & input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

export const InputWrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 width:100%;
 margin:${(p) => p.theme.spacing.sm} 0;
`;
export const ButtonWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
export const InfoWrapper = styled.div`
background-image: linear-gradient(to right, ${(p) => p.theme.colors.pink},${(p) => p.theme.colors.skyColor},${(p) => p.theme.colors.inputBgColor});
width:400px;
padding:${(p) => p.theme.spacing.sm};
border-radius:${(p) => p.theme.radius.md};
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

export const Address = styled.div`
  font-weight:${(p) => p.theme.font.weight.bold};
  margin:${(p) => p.theme.spacing.xs} 0;
`;

export const Chain = styled.div`
 display:flex;
 align-items:center;
`;

export const Logo = styled.img`
  width:20px;
  margin-right:${(p) => p.theme.spacing.xxs};
`;

export const FormWrapper = styled.div`
  margin:${(p) => p.theme.spacing.md};
  width:400px;
`;

export const Button = styled.button`
background-color: ${(p) => p.theme.colors.pink};
border:none;
color:${(p) => p.theme.colors.white};
padding:${(p) =>p.theme.spacing.sm} ${(p) =>p.theme.spacing.lg};
border-radius:${(p) => p.theme.radius.xxl};
display:flex;
align-items:center;
`;

export const BannerWrapper = styled.div`

`;

export const Text = styled.div`
margin:${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.sm} 0;
`;