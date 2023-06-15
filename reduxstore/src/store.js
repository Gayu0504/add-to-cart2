import { configureStore } from "@reduxjs/toolkit";
import Cartsystem from "./reduxstore/Cartsystem";
const store= configureStore({
  reducer: {
    product:Cartsystem
  },    
});
export default store;

