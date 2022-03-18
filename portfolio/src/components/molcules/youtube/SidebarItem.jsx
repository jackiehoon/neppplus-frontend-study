import styled from "styled-components";

const SidebarItem = ({ name, icon }) => {
  return (
    <Item>
      <IconWrapper>{icon()}</IconWrapper>
      <Name>{name}</Name>
    </Item>
  );
};

const Item = styled.div`
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 24px;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
const Name = styled.div`
  margin-left: 24px;
`;

export default SidebarItem;
