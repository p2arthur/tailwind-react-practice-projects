import { useState, createContext } from "react";

const emailsContext = createContext();

function EmailsProvider({ children }) {
  return <emailsContext.Provider value={{}}>{children}</emailsContext.Provider>;
}

export { EmailsProvider };

export default emailsContext;
