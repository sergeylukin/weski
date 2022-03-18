import { fetchResorts, resortsAdapter, resortsReducer } from './resorts.slice';

describe('resorts reducer', () => {
  it('should handle initial state', () => {
    const expected = resortsAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(resortsReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchResortss', () => {
    let state = resortsReducer(undefined, fetchResorts.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = resortsReducer(
      state,
      fetchResorts.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = resortsReducer(
      state,
      fetchResorts.rejected(new Error('Uh oh'), null, null)
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
