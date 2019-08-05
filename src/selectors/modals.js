import createCachedSelector from 're-reselect';
import { Collection } from 'immutable';

export const selectModal = createCachedSelector(
  state => state.get('modals'),
  (state, id) => id,
  (modals, id) => {
    const result = modals.get(id);
    return result instanceof Collection ? result.toJS() : undefined;
  }
)((state, id) => `modal:${id}`);
