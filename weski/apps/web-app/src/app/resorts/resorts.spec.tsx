import { render } from '@testing-library/react';

import Resorts from './resorts';

describe('Resorts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Resorts />);
    expect(baseElement).toBeTruthy();
  });
});
