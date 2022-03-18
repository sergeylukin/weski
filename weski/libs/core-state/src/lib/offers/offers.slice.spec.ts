import { fetchOffers, offersAdapter, offersReducer } from './offers.slice';

describe('offers reducer', () => {
  it('should handle initial state', () => {
    const expected = offersAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(offersReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchOfferss', () => {
    let state = offersReducer(undefined, fetchOffers.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = offersReducer(
      state,
      fetchOffers.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = offersReducer(
      state,
      fetchOffers.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
