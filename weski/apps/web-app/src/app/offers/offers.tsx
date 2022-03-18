import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface OffersProps {}

const StyledOffers = styled.div`
  color: pink;
`;

export function Offers(props: OffersProps) {
  return (
    <StyledOffers>
      <h1>Welcome to Offers!</h1>

      <ul>
        <li>
          <Link to="/">offers root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the offers root route.</div>}
      />
    </StyledOffers>
  );
}

export default Offers;
