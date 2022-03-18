import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ResortsProps {}

const StyledResorts = styled.div`
  color: pink;
`;

export function Resorts(props: ResortsProps) {
  return (
    <StyledResorts>
      <h1>Welcome to Resorts!</h1>

      <ul>
        <li>
          <Link to="/">resorts root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the resorts root route.</div>}
      />
    </StyledResorts>
  );
}

export default Resorts;
