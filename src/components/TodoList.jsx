import React from 'react';
import {
  getTodoItemsFromLocalStorage,
  saveTodoItemsToLocalStorage,
} from '../utils/helper';
import TodoForm from './TodoForm';
import styled from 'styled-components';
import Skeleton from '@yisheng90/react-loading';

const Todo = React.lazy(() => import('./Todo'));

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoList = () => {
  const [todos, setTodos] = React.useState(
    getTodoItemsFromLocalStorage('todo') || []
  );

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    saveTodoItemsToLocalStorage('todo', newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    const todo = todos.map((todoItem) =>
      todoItem.id === todoId ? newValue : todoItem
    );
    setTodos(todo);
    // setTodos((prev) =>
    //   prev.map((item) => (item.id === todoId ? newValue : item))
    // );
    saveTodoItemsToLocalStorage('todo', todo);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
    saveTodoItemsToLocalStorage('todo', removeArr);
  };

  const completeTodo = (id) => {
    const todo = todos.find((todoItem) => todoItem.id === id);
    todo.isComplete = !todo.isComplete;

    setTodos([...todos]);
    saveTodoItemsToLocalStorage('todo', todos);
  };

  return (
    <div>
      <h1>Whats the plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
      <React.Suspense
        fallback={
          <SkeletonContainer>
            <Skeleton
              color="rgba(25,67,89,0.3)"
              width="90%"
              height={50}
              rows={6}
            />
          </SkeletonContainer>
        }
      >
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </React.Suspense>
    </div>
  );
};

export default TodoList;
