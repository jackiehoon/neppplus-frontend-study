import styled from "styled-components";

import { firstList, secondList } from "../../../data/sidebar";
const MiniSidebar = () => {
  return (
    <Container>
      <List>
        {firstList.map(({ icon, name }, index) => (
          <Item key={index}>
            <IconWrapper>{icon()}</IconWrapper>
            <Name>{name}</Name>
          </Item>
        ))}
        <Item>
          <IconWrapper>{secondList[0].icon()}</IconWrapper>
          <Name>보관함</Name>
        </Item>
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 72px;
  height: calc(100vh - 56px);
  position: fixed;
  top: 56px;
  overflow: auto;
`;
const List = styled.div``;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
`;
const Name = styled.span`
  font-size: 10px;
`;
export default MiniSidebar;
