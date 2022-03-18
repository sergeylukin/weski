import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const RESORTS_FEATURE_KEY = 'resorts';

/*
 * Update these interfaces according to your requirements.
 */
export interface ResortsEntity {
  id: number;
}

export interface ResortsState extends EntityState<ResortsEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const resortsAdapter = createEntityAdapter<ResortsEntity>();

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
 *   dispatch(fetchResorts())
 * }, [dispatch]);
 * ```
 */
export const fetchResorts = createAsyncThunk(
  'resorts/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getResortss()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialResortsState: ResortsState = resortsAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const resortsSlice = createSlice({
  name: RESORTS_FEATURE_KEY,
  initialState: initialResortsState,
  reducers: {
    add: resortsAdapter.addOne,
    remove: resortsAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResorts.pending, (state: ResortsState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchResorts.fulfilled,
        (state: ResortsState, action: PayloadAction<ResortsEntity[]>) => {
          resortsAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchResorts.rejected, (state: ResortsState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const resortsReducer = resortsSlice.reducer;

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
 *   dispatch(resortsActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const resortsActions = resortsSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllResorts);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = resortsAdapter.getSelectors();

export const getResortsState = (rootState: unknown): ResortsState =>
  rootState[RESORTS_FEATURE_KEY];

export const selectAllResorts = createSelector(getResortsState, selectAll);

export const selectResortsEntities = createSelector(
  getResortsState,
  selectEntities
);
