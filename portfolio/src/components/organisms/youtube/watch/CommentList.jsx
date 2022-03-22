import styled from "styled-components";

const VideoCommentList = () => {
  return (
    <Wrapper>
      <Header>
        <Count>댓글 525개</Count>
        <BtnSort>정렬 기준</BtnSort>
        <Form>
          <ProfileImage />
          <InputText placeholder="댓글 추가..." />
        </Form>
      </Header>
      <List>
        <Item>
          <ProfileImage />
          <Body>
            <CommentHeader>
              <Author>beom kk</Author>
              <PublishedTime>17시간 전</PublishedTime>
            </CommentHeader>
            <Content>
              이 어려운 내용들을 슈카형이 설명 해주니까 이해가 쉽다!
            </Content>
            <ActionList>답글</ActionList>
            <Replys>답글 2개 보기</Replys>
          </Body>
        </Item>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Header = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
`;
const Count = styled.span``;
const BtnSort = styled.button``;
const Form = styled.form`
  display: flex;
  align-items: flex-start;
  margin-top: 24px;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;
const InputText = styled.input`
  flex: 1;
  background: none;
  border: none;
  border-bottom: 1px solid #030303;
  outline: none;
`;
const List = styled.div``;
const Item = styled.div`
  display: flex;
`;
const Body = styled.div``;
const CommentHeader = styled.div``;
const Author = styled.span`
  color: #030303;
  font-weight: 500;
  font-size: 13px;
  margin-right: 2px;
  margin-bottom: 4px;
  display: inline-block;
`;
const PublishedTime = styled.span`
  color: #606060;
  font-size: 12px;
`;
const Content = styled.p`
  margin: 0;
`;
const ActionList = styled.div``;
const Replys = styled.div``;

export default VideoCommentList;
