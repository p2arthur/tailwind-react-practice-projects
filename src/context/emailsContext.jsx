import { useState, createContext } from "react";
import { getEmailRequest, postEmailRequest } from "../model";

const emailsContext = createContext();

function EmailsProvider({ children }) {
  const [emailList, setEmailList] = useState([]);

  const fetchEmailList = async () => {
    const { data } = await getEmailRequest();
    setEmailList(data);
  };

  const postToEmailList = async (email) => {
    postEmailRequest(email);
  };

  return (
    <emailsContext.Provider
      value={{ fetchEmailList, emailList, postToEmailList }}
    >
      {children}
    </emailsContext.Provider>
  );
}

export { EmailsProvider };

export default emailsContext;
