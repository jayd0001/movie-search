import { configureStore } from "@reduxjs/toolkit";
import  movieReducer from "../slice/MovieSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, movieReducer);

const store = configureStore({
  reducer: {
    movies: persistedReducer,
  },
});


export const persistor = persistStore(store);

export default store;
