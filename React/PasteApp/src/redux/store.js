import {configureStore} from "@reduxjs/toolkit"
import pasteReducer from "./pasteSlice" //this is how we add slice reducers to store

export const store = configureStore({
  reducer:{
      paste: pasteReducer
  }
})