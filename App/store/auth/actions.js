import { createAction } from "@reduxjs/toolkit";
import { DONE, FAIL, FETCH, HANDLE, LOGIN } from "../constants";


export const loginAction = createAction(LOGIN + FETCH);
export const loginActionDone = createAction(LOGIN + FETCH + DONE);
export const loginActionFail = createAction(LOGIN + FETCH + FAIL);
export const loginHandle = createAction<Boolean>(LOGIN + HANDLE);


export const logoutAction = createAction(LOGIN + FETCH);
export const logoutActionDone = createAction(LOGIN + FETCH + DONE);
