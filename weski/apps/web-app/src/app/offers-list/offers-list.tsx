import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface OffersListProps {}

const StyledOffersList = styled.div`
  color: pink;
`;

export function OffersList(props: OffersListProps) {
  return (
    <StyledOffersList>
      <h1>Welcome to OffersList!</h1>

      <ul>
        <li>
          <Link to="/">offers-list root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the offers-list root route.</div>}
      />
    </StyledOffersList>
  );
}

export default OffersList;
