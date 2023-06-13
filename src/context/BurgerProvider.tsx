import { useState, useContext, createContext } from "react";

interface BurgerContextType {
  isBurgerOpen: boolean;
  toggleBurger: () => void;
}

const BurgerContext = createContext<BurgerContextType>();

export function BurgerProvider({ children }: { children: React.ReactNode }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);
  return (
    <BurgerContext.Provider value={{ isBurgerOpen, toggleBurger }}>
      {children}
    </BurgerContext.Provider>
  );
}

export function useBurger() {
  const context = useContext(BurgerContext);
  if (!context) {
    throw new Error("useBurger must be used within a BurgerProvider");
  }
  return context;
}
