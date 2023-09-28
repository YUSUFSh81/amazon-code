import { configureStore  } from "@reduxjs/toolkit";

// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducers";
import basketReducer from "../slices/basketSlice";

// initial states here
// const initalState = {};

// middleware
// const middleware = [thunk];

// creating store
export const store = configureStore({
  reducer: {
    basket: basketReducer
  }
});

// assigning store to next wrapper
// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);
