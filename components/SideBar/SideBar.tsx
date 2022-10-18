import React from "react";
import styled from "@emotion/styled";
import Profile from "../Profile/Index";
import Balance from "../Balance/Index";
import Menu from "../Menu/Index";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile
        name="Lucimara Assis"
        role="Assoc, Dev FullStack"
        avatar="https://avatars.githubusercontent.com/u/95291739?v=4"
        agency="0001"
        accountNumber="123456789"
      />
      <Balance amount={20000}/>
      <Menu/>
    </SideBarContainer>
  );
}