import axios from "axios";

export async function postEmailRequest(email) {
  const response = await axios.post("http://localhost:3001/emails", { email });

  return response;
}

export async function getEmailRequest() {
  const response = await axios.get("http://localhost:3001/emails");
  return response;
}
