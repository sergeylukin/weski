import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ResortsListProps {}

const StyledResortsList = styled.div`
  color: pink;
`;

export function ResortsList(props: ResortsListProps) {
  return (
    <StyledResortsList>
      <h1>Welcome to ResortsList!</h1>

      <ul>
        <li>
          <Link to="/">resorts-list root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the resorts-list root route.</div>}
      />
    </StyledResortsList>
  );
}

export default ResortsList;
