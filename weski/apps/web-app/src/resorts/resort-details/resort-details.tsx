import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ResortDetailsProps {}

const StyledResortDetails = styled.div`
  color: pink;
`;

export function ResortDetails(props: ResortDetailsProps) {
  return (
    <StyledResortDetails>
      <h1>Welcome to ResortDetails!</h1>

      <ul>
        <li>
          <Link to="/">resort-details root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the resort-details root route.</div>}
      />
    </StyledResortDetails>
  );
}

export default ResortDetails;
