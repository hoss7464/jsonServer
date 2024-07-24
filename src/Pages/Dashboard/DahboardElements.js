import styled from "styled-components";
import { colors } from "../../Core-UI/Theme";

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 720px;
`;

export const LogOutBtn = styled.button`
  padding: 16px 24px;
  border: none;
  background-color: ${colors.prime1};
  color: ${colors.font2};
  font-weight: 600;
  margin-top: 1rem;
  border-radius: 8px;
  cursor: pointer;
`;
