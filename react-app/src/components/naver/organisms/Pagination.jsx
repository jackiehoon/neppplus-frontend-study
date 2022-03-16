import styled from "styled-components";

const Pagination = ({ onPageChange, total, nowPage }) => {
  // total =    0.1 0.9 1  1.1 2.0 2.1 2.9 3.0 10.0 10.1 10.2
  // lastPage = 1 1 1      2  2    3  3  3     10  11  11

  const lastPage = Math.ceil(total / 10);

  //   const nowPage =   1 1   2 2 2 3 10 11 11
  //   const startPage = 1 1  11 11 11 21 21 91  101 101

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
      {nowPage < lastPage && (
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
