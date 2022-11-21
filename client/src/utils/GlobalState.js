import React, { createContext, useContext } from "react";
// import { useProductReducer } from "./reducers";
import { useDispatch, useSelector } from "react-redux";

const StoreContext = createContext();
const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: "",
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

const useStoreContext = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return useContext(StoreContext);
};

export { useStoreContext };
