import { createReducer } from "@reduxjs/toolkit";

import { DONE, FAIL, FETCH, HANDLE, LOGIN, LOGOUT } from "../constants";
import reducerStatuses from "../statuses";

const emptyUser = {
  id: null,
  name: null,
  avatar: null,
  phone: null,
  roles: [],
};

const initialState = {
  isAuthenticated: false,
  status: reducerStatuses,
  data: {
    token: null,
    user: emptyUser,
  },
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN + FETCH, (state) => ({
      ...state,
      status: {
        ...reducerStatuses,
        loading: true,
      },
    }))
    .addCase(LOGIN + FETCH + DONE, (state, { payload }) => ({
      ...state,
      isAuthenticated: true,
      status: {
        ...reducerStatuses,
        success: true,
      },
      data: {
        ...state.data,
        ...payload,
      },
    }))
    .addCase(LOGIN + FETCH + FAIL, (state) => ({
      ...state,
      isAuthenticated: false,
      status: {
        ...reducerStatuses,
        failed: true,
      },
    }))
    .addCase(LOGIN + HANDLE, (state, { payload }) => ({
      ...state,
      isAuthenticated: payload,
    }))
    .addCase(LOGOUT + FETCH + DONE, (state) => ({
      ...state,
      isAuthenticated: false,
      status: reducerStatuses,
      data: {
        token: null,
        user: emptyUser,
      },
    }));
});
