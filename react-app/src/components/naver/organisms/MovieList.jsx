import styled from "styled-components";

const MovieList = ({ data }) => {
  return (
    <List>
      {data.map(({ image, title, link }) => (
        <a href={link} key={link} target="_blank" rel="noreferrer">
          <Item>
            <Thumbnail src={image} />
            <Title
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          </Item>
        </a>
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

export default MovieList;
