import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;
  border: ${({ edit }) => (edit ? '2px solid #149fff' : '2px solid #5d0cff')};
  ::placeholder {
    color: #e2e2e2;
  }
  @media screen and (max-width: 480px) {
    padding: 7px;
    width: 190px;
  }
`;
const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  color: #fff;
  text-transform: capitalize;
  padding: ${({ edit }) => (edit ? '16px 22px' : '16px')};
  background: ${({ edit }) =>
    edit
      ? ' linear-gradient( 90deg,rgba(20, 159, 255, 1) 0%,rgba(17, 122, 255, 1) 100%)'
      : 'linear-gradient(90deg,rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)'};
`;
const TodoForm = ({ onSubmit, edit }) => {
  const [input, setInput] = React.useState(edit ? edit.value : '');

  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput('');
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <label>
            <Input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Update Your Todo"
              value={input}
              name="text"
              ref={inputRef}
              edit={edit}
            />
          </label>
          <Button edit={edit} type="submit">
            Update todo
          </Button>
        </>
      ) : (
        <>
          <label>
            <Input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add a Todo"
              value={input}
              name="text"
              ref={inputRef}
            />
          </label>

          <Button edit={edit} type="submit">
            Add todo
          </Button>
        </>
      )}
    </Form>
  );
};

export default TodoForm;
