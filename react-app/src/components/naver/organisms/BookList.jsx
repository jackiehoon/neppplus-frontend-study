import styled from "styled-components";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ isbn, title, image }) => (
        <Item key={isbn}>
          <Thumbnail src={image} />
          <Title dangerouslySetInnerHTML={{ __html: title }} />
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 15px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.span``;

export default BookList;
