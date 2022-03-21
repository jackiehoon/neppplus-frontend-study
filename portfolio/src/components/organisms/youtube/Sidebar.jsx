import styled from "styled-components";
import SidebarItem from "../../molcules/youtube/SidebarItem";

import {
  firstList,
  secondList,
  subscribeList,
  moreList,
  lastList,
} from "../../../data/sidebar";

const Sidebar = () => {
  return (
    <Container>
      <List>
        {firstList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        {secondList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        <Title>구독</Title>
        {subscribeList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        <Title>YOUTUBE 더보기</Title>
        {moreList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
      <List>
        {lastList.map(({ icon, name }) => (
          <SidebarItem key={name} name={name} icon={icon} />
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: calc(100vh - 56px);
  position: fixed;
  top: 56px;
  overflow: auto;
  background: #fff;
`;

const List = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
`;

const Title = styled.div`
  color: #606060;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
`;

export default Sidebar;
