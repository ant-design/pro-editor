import { CRUDState, initialCRUDState } from './slices/crud';

export type EditorStoreState = CRUDState;

export const initialState: EditorStoreState = {
  ...initialCRUDState,
};
