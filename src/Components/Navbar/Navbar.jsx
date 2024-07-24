import React from "react";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import {
  NavbarContainer,
  NavbarActiveArea,
  NavbarLinkWrapper,
  LinkWrapper,
  NavbarLink,
  SignInUpContainer,
  SignUpInLinkWrapper,
  HamburgerIconContainer,
  HamburgerWrapper,
  HamburgerIcon,
} from "./NavbarElements";
import { NavbarText } from "../../Helper/Navbar";
import { clickToggle } from "../../Redux/actions/toggleSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <NavbarContainer>
        <NavbarActiveArea>
          <NavbarLinkWrapper>
            <LinkWrapper>
              <NavbarLink to="/"> {NavbarText.text1} </NavbarLink>
            </LinkWrapper>
          </NavbarLinkWrapper>
          <SignInUpContainer>
            <SignUpInLinkWrapper>
              <NavbarLink to="/login" className="signIn">
                {NavbarText.text2}
              </NavbarLink>
            </SignUpInLinkWrapper>
            <SignUpInLinkWrapper>
              <NavbarLink to="/register" className="signup">
                {NavbarText.text3}
              </NavbarLink>
            </SignUpInLinkWrapper>
          </SignInUpContainer>
          <HamburgerIconContainer>
            <HamburgerWrapper onClick={() => dispatch(clickToggle("sidebar"))}>
              <HamburgerIcon />
            </HamburgerWrapper>
          </HamburgerIconContainer>
        </NavbarActiveArea>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
