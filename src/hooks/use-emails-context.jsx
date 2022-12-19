import { useContext } from "react";
import emailsContext from "../context/emailsContext";

function UseEmailsContext() {
  return useContext(emailsContext);
}

export default UseEmailsContext;
