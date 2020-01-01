import { createSelector } from 'reselect';
import doSort from './utils/doSort';

const select_post_state = state => state.post.posts;
const select_isLoading_state = state => state.loading.post;

export const state_posts = createSelector(
  [select_post_state],
  state => doSort(state)
);

export const state_delete_isLoading = createSelector(
  [select_isLoading_state],
  state => state.delete.isLoading
);

