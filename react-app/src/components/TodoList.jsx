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
    const newTodoList = [...todoList, { id: nextId.current, text: text }];
    setTodoList(newTodoList);
    setText("");
    nextId.current++;
  };

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleEdit = (id) => {
    const newText = prompt("입력하세요");
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { id: 1, text: "!!" };
      }
      return todo;
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
      <List>
        {todoList.map((todo) => (
          <Item isDone={true} key={todo.id}>
            <label>
              <Checkbox type="checkbox" />
              <Content>{todo.text}</Content>
            </label>
            <BtnWrapper>
              <BtnEdit onClick={() => handleEdit(todo.id)}>수정</BtnEdit>
              <BtnDelete onClick={() => handleDelete(todo.id)}>삭제</BtnDelete>
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
const Item = styled.li`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    border-top: 1px solid #ddd;
  }
`;
const Checkbox = styled.input``;
const Content = styled.span``;
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
