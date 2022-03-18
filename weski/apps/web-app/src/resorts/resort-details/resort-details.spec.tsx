import { render } from '@testing-library/react';

import ResortDetails from './resort-details';

describe('ResortDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResortDetails />);
    expect(baseElement).toBeTruthy();
  });
});
