import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TodosProps {}

const StyledTodos = styled.div`
  color: pink;
`;

export const Todos = (props: TodosProps) => {
  return (
    <StyledTodos>
      <h1>Welcome to todos component!</h1>
    </StyledTodos>
  );
};

export default Todos;
