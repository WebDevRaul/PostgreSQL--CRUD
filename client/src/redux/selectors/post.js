import { createSelector } from 'reselect';

const select_post_state = state => state.post.posts;
const select_isLoading_state = state => state.loading.post;

export const state_posts = createSelector(
  [select_post_state],
  state => state
);

export const state_edit_isLoading = createSelector(
  [select_isLoading_state],
  state => state.edit.isLoading
);

export const state_add_isLoading = createSelector(
  [select_isLoading_state],
  state => state.add.isLoading
);

