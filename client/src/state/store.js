import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import{reducer} from './RootReducer'
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  timeout: 0,
  key: "root",
  storage: storage,
};

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ];

  //middleware for logging data
  if (process.env.NODE_ENV == "development") {
    middleware.push(logger);
  }
  // to persist the data on reload;
  const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
    reducer:persistedReducer,
    devTools:process.env.NODE_ENV == "development",
    middleware
  })

  export const persistor = persistStore(store);