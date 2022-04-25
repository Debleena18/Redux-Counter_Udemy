import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

//configureStore () makes merging multiple reducer easy
//reducer is fixed property and only one will be there.
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //1st counter
});

export default store;