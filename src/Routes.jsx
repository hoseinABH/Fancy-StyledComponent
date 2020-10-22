import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import GlobalStyle from './globalStyles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
  cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png')
      39 39,
    auto;

  @media screen and (max-width: 480px) {
    width: 340px;
    margin: 50px auto;
  }
`;

const Routes = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <TodoList />
      </Container>
    </>
  );
};

export default Routes;
