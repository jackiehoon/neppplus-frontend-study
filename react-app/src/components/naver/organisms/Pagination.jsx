import styled from "styled-components";

const MAX_BUTTON_COUNT = 10;

const Pagination = ({ onPageChange, total, nowPage, display = 10 }) => {
  // total =    20 21 30 40 41
  // lastPage = 1  2  2  2  3

  const lastPage = Math.ceil(total / display);
  console.log(nowPage, total);
  // const nowPage =   1 5 6 10 11
  // const startPage = 1 1 6 6  11

  const startPage = Math.ceil(nowPage / 10) * 10 - 9;
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;
  const pageList = [];

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <List>
      {nowPage > 1 && (
        <Page onClick={() => onPageChange(nowPage - 1)}>이전</Page>
      )}
      {pageList.map((page) => (
        <Page
          active={page === nowPage}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Page>
      ))}
      {nowPage < lastPage && nowPage < 100 && (
        <Page onClick={() => onPageChange(nowPage + 1)}>다음</Page>
      )}
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
`;

const Page = styled.button`
  background: ${({ active }) => active && "#000"};
  color: ${({ active }) => active && "#fff"};
`;

export default Pagination;
