import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";
import {Link} from "react-router-dom"
import { HiMenuAlt3 } from "react-icons/hi";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: ${colors.prime3};
  position: fixed;
  z-index: 1000;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    padding: 0 24px 0 24px;
    height: 60px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0 40px 0 40px;
    height: 60px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    padding: 0 56px 0 56px;
    height: 70px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    padding: 0 72px 0 72px;
    height: 70px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 88px 0 88px;
    height: 80px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    padding: 0 104px 0 104px;
    height: 80px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    padding: 0 168px 0 168px;
    height: 80px;
  }

  @media only screen and (min-width: 1921px) {
    padding: 0 232px 0 232px;
    height: 124px;
  }
`;

export const NavbarActiveArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const NavbarLinkWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export const LinkWrapper = styled.div`
  border-radius: 8px;
  cursor: pointer;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  font-weight: 600;
  color: ${colors.font1};

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media only screen and (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 8px 24px;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 16px;
    padding: 8px 24px;
  }

  @media only screen and (min-width: 1281px) and (max-width: 1440px) {
    font-size: 16px;
    padding: 16px 24px;
  }

  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 16px;
    padding: 16px 24px;
  }

  @media only screen and (min-width: 1921px) {
    font-size: 24px;
    padding: 16px 24px;
  }
`;

export const SignInUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SignUpInLinkWrapper = styled.div`
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HamburgerIconContainer = styled.div`
  height: 100%;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HamburgerIcon = styled(HiMenuAlt3)`
  cursor: pointer;
  @media only screen and (min-width: 280px) and (max-width: 576px) {
    width: 32px;
    height: 32px;
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;


