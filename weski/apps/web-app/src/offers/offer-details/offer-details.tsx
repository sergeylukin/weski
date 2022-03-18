import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface OfferDetailsProps {}

const StyledOfferDetails = styled.div`
  color: pink;
`;

export function OfferDetails(props: OfferDetailsProps) {
  return (
    <StyledOfferDetails>
      <h1>Welcome to OfferDetails!</h1>

      <ul>
        <li>
          <Link to="/">offer-details root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the offer-details root route.</div>}
      />
    </StyledOfferDetails>
  );
}

export default OfferDetails;
