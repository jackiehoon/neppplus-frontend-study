import { useRef, useState } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(1);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = [
      ...todoList,
      { id: nextId.current, text, isDone: true },
    ];
    setTodoList(newTodoList);
    setText("");
    nextId.current++;
  };

  const handleDelete = (deleteId) => {
    const newTodoList = todoList.filter(({ id }) => id !== deleteId);
    setTodoList(newTodoList);
  };

  const handleEdit = (id) => {
    const newText = prompt("입력하세요");
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodoList(newTodoList);
  };

  const handleChecked = (id, checked) => {
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: checked } : todo
    );
    setTodoList(newTodoList);
  };

  const handleCheckAll = (checked) => {
    const newTodoList = todoList.map((todo) => ({ ...todo, isDone: checked }));
    setTodoList(newTodoList);
  };
  const toggleCheckAll = () => {
    const newTodoList = todoList.map((todo) => {
      return { ...todo, isDone: !todo.isDone };
    });
    setTodoList(newTodoList);
  };
  return (
    <Container>
      <Title>일정 관리</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputText onChange={handleChange} value={text} />
          <BtnSubmit>+</BtnSubmit>
        </InputWrapper>
      </form>
      <div>
        <button onClick={() => setTodoList([])}>전체삭제</button>
        <button onClick={() => handleCheckAll(true)}>전체체크</button>
        <button onClick={() => handleCheckAll(false)}>전체해제</button>
        <button onClick={toggleCheckAll}>전체반전</button>
      </div>
      <List>
        {todoList.map(({ id, isDone, text }) => (
          <Item isDone={isDone} key={id}>
            <label>
              <Checkbox
                type="checkbox"
                checked={isDone}
                onChange={(e) => handleChecked(id, e.target.checked)}
              />
              <Content>{text}</Content>
            </label>
            <BtnWrapper>
              <BtnEdit onClick={() => handleEdit(id)}>수정</BtnEdit>
              <BtnDelete onClick={() => handleDelete(id)}>삭제</BtnDelete>
            </BtnWrapper>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  margin: 50px auto;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Title = styled.div`
  background: #22b8cf;
  color: #fff;
  text-align: center;
  padding: 15px;
  font-size: 24px;
`;
const InputWrapper = styled.div`
  display: flex;
  background: #000;
`;
const InputText = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 10px;
  color: #fff;
`;
const BtnSubmit = styled.button`
  width: 40px;
  border: none;
  font-size: 24px;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Content = styled.span``;
const Item = styled.li`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    border-top: 1px solid #ddd;
  }
  background: ${(props) => props.isDone && "#efefef"};

  ${Content} {
    text-decoration: ${(props) => props.isDone && "line-through"};
  }
`;
const Checkbox = styled.input``;

const BtnWrapper = styled.div``;
const BtnEdit = styled.button`
  color: #fff;
  border: 1px solid green;
  background: green;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
`;
const BtnDelete = styled.button`
  color: #fff;
  border: 1px solid red;
  background: red;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
`;

export default TodoList;
