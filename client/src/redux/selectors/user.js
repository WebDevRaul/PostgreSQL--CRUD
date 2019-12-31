import { createSelector } from 'reselect';

const select_isAuth_state = state => state.user.isAuth;
const select_user_state = state => state.user.user;
const select_isLoading_state = state => state.loading.user.isLoading;
const select_errors_state = state => state.error.user.error;

export const state_isAuth = createSelector(
  [select_isAuth_state],
  state => state
);

export const state_user = createSelector(
  [select_user_state],
  state => state
);

export const state_isLoading = createSelector(
  [select_isLoading_state],
  state => state
);

export const state_errors = createSelector(
  [select_errors_state],
  state => state
);