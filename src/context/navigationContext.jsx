import { createContext, useEffect } from "react";
import { useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => setCurrentPage(window.location.pathname);

    window.addEventListener("popstate", handler);

    return window.removeEventListener("popstate", handler);
  });
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPage(path);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPage }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
