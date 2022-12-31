import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { QLNDReducer } from "./QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "./QuanLyPhimReducer";

const rootReducer = combineReducers({
  QLNDReducer,
  QuanLyPhimReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));


