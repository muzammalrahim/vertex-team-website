import { useContext, createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 576px)").matches
  );
  const onTouchEnd = () => {
    setOpen(false);
  };
  const onSwitch = () => {
    setOpen((c) => !c);
  };

  useEffect(() => {
    window
      .matchMedia("(max-width: 576px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <AppContext.Provider
      value={{
        open,
        onTouchEnd,
        onSwitch,
        matches,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hooks

const useMenuContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useMenuContext };
