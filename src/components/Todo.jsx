import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import styled from 'styled-components';
import TodoForm from './TodoForm';

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
  padding: 16px;
  border-radius: 5px;
  width: 90%;
  &:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }

  &:nth-child(4n + 2) {
    background: linear-gradient(90deg, rgba(255, 12, 241, 1) 0%, #494949 100%);
  }

  &:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
  }
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
  opacity: ${({ complete }) => (complete ? '0.4' : '1')};
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

const DeleteIcon = styled(RiCloseCircleLine)`
  margin-right: 5px;
  color: #fff;
`;
const EditIcon = styled(TiEdit)`
  color: #fff;
`;

const Todo = ({ completeTodo, todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = React.useState({
    id: null,
    value: '',
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);

    setEdit({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          complete={todo.isComplete}
          onClick={() => completeTodo(todo.id)}
        >
          <div key={todo.id}>{todo.text}</div>
          <Icons>
            <DeleteIcon
              onClick={(e) => {
                e.stopPropagation();
                removeTodo(todo.id);
              }}
            />
            <EditIcon
              onClick={(e) => {
                e.stopPropagation();

                setEdit({
                  id: todo.id,
                  value: todo.text,
                });
              }}
            />
          </Icons>
        </TodoItem>
      ))}
    </>
  );
};

export default Todo;
