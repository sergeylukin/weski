import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const OFFERS_FEATURE_KEY = 'offers';

/*
 * Update these interfaces according to your requirements.
 */
export interface OffersEntity {
  id: number;
}

export interface OffersState extends EntityState<OffersEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const offersAdapter = createEntityAdapter<OffersEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchOffers())
 * }, [dispatch]);
 * ```
 */
export const fetchOffers = createAsyncThunk(
  'offers/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getOfferss()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialOffersState: OffersState = offersAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const offersSlice = createSlice({
  name: OFFERS_FEATURE_KEY,
  initialState: initialOffersState,
  reducers: {
    add: offersAdapter.addOne,
    remove: offersAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state: OffersState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchOffers.fulfilled,
        (state: OffersState, action: PayloadAction<OffersEntity[]>) => {
          offersAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchOffers.rejected, (state: OffersState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const offersReducer = offersSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(offersActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const offersActions = offersSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllOffers);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = offersAdapter.getSelectors();

export const getOffersState = (rootState: unknown): OffersState =>
  rootState[OFFERS_FEATURE_KEY];

export const selectAllOffers = createSelector(getOffersState, selectAll);

export const selectOffersEntities = createSelector(
  getOffersState,
  selectEntities
);
