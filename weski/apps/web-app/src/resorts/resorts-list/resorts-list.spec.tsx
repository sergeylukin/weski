import { render } from '@testing-library/react';

import ResortsList from './resorts-list';

describe('ResortsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResortsList />);
    expect(baseElement).toBeTruthy();
  });
});
