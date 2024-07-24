import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 720px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 8rem;
`;

export const RegisterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.prime3};
  border-radius: 8px;
  border: solid 1.5px ${colors.prime4};
  @media only screen and (min-width: 280px) and (max-width: 1024px) {
    padding: 1rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1920px) {
    padding: 1.5rem;
  }

  @media only screen and (min-width: 1921px) {
    padding: 2rem;
  }
`;

export const SignupHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
    margin-bottom: 1.5rem;
  }
`;

export const SignupHeader = styled.h1`
  color: ${colors.font1};
  font-weight: 700;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) {
    font-size: 28px;
  }
`;

export const RegisterInputLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const RegisterLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export const RegisterInputLabel = styled.label`
  color: ${colors.font1};
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const RegisterInputIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${colors.font2};
  border: solid 1.5px ${colors.prime4};

  position: relative;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    padding-top: 0.4rem;
    padding-bottom: 0.2rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
  @media only screen and (min-width: 769px) {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 0.4rem;
    padding-right: 0.7rem;
  }
`;

export const RegisterInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;
export const RegisterInput = styled.input`
  height: 33px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  background-color: ${colors.font2};
  font-size: 20px;
  border: none;
  outline: none;
  &:focus {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
    color: ${colors.font3};
  }

  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 220px;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 250px;
  }

  @media only screen and (min-width: 769px) {
    width: 330px;
  }
`;
export const RegisterIconWrapper = styled.div`
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    display: none;
  }
  @media only screen and (min-width: 769px) {
    display: flex;
  }
`;

export const RegisterIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const RegisterSubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const RegisterSubmitButton = styled.button`
  padding: 12px 32px;
  background-color: ${colors.sec1};
  border-radius: 8px;
  color: ${colors.font2};
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const RegisterQuestionWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  font-size: 14px;

  @media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export const RegiterLink = styled(Link)`
  color: #0d99ff;
  font-size: 14px;
  margin-left: 0.2rem;
`;

export const RegisterErrorWrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-top: 0.3rem;
@media only screen and (min-width: 280px) and (max-width: 768px) {
    justify-content: center;
  }

  @media only screen and (min-width: 769px) {
    justify-content: flex-start;
  }
`

export const RegisterError = styled.p`
font-size: 12px;
color: red;
`
