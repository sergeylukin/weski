import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <h1>Welcome to Home!</h1>

      <ul>
        <li>
          <Link to="/">home root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the home root route.</div>} />
    </StyledHome>
  );
}

export default Home;
