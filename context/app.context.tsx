import { ReactNode, createContext, useState } from "react";
import { ProductItem } from "../interfaces";

export interface IAppContext {
  cartItem: ProductItem[] ;
  setCart?: (newCart: ProductItem[]) => void 
}

export const AppContext = createContext<IAppContext>({cartItem: []});

export const AppContextProvider = ({cartItem, children}: IAppContext & {children: ReactNode}):JSX.Element => {
  const [cartState, setCartState] = useState<ProductItem[]>(cartItem);
  const setCart = (newCart: ProductItem[]) => {
    setCartState(newCart);
  };
  
  return <AppContext.Provider value={{ cartItem: cartState, setCart }}>
    {children}
  </AppContext.Provider>;
}