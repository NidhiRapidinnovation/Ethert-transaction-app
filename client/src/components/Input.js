import styled from "styled-components";

const InputText = styled.input`
width:100%;
padding:${(p) => p.theme.spacing.sm};
border-radius:${(p) => p.theme.radius.xxl};
outline:none;
border:none;
color:${(p) => p.theme.colors.white};
background-color:${(p) => p.theme.colors.inputBgColor};


`;
export const Input = ({ placeholder, name, type, value, handleChange }) => (
    <InputText
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
    />
  );
  