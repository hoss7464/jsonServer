import React from "react";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { clickToggle } from "../../Redux/actions/toggleSlice";
import {
  SidebarContainer,
  SideLinkContainer,
  SidebarWrapper,
  SideLink,
} from "./SidebarElements";
import { useLocation } from "react-router-dom";
import { SidebarText } from "../../Helper/Sidebar";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.toggle.toggles["sidebar"]);
  const Location = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      <SidebarContainer
        isOpen={isOpen}
        onClick={() => dispatch(clickToggle("sidebar"))}
        style={{
          opacity: isOpen ? "100%" : "0",
          top: isOpen ? "0" : "-100%",
        }}
      >
        <SidebarWrapper>
          <SideLinkContainer>
            <SideLink
              to="/"
              className={Location.pathname === "/" ? "active-color" : null}
            >
              {SidebarText.text1}
            </SideLink>
            <SideLink
              to="/login"
              className={Location.pathname === "/login" ? "active-color" : null}
            >
              {SidebarText.text2}
            </SideLink>
            <SideLink
              to="/register"
              className={
                Location.pathname === "/register" ? "active-color" : null
              }
            >
              {SidebarText.text3}
            </SideLink>
          </SideLinkContainer>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
