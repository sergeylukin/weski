import { render } from '@testing-library/react';

import OfferDetails from './offer-details';

describe('OfferDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OfferDetails />);
    expect(baseElement).toBeTruthy();
  });
});
