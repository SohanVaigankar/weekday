import { GET_JD_LIST } from "./methods";

export const fetchJdList = async (body) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: GET_JD_LIST.METHOD,
    headers: myHeaders,
    body,
  };
  console.log("GET_JD_LIST.URL", GET_JD_LIST.URL);
  const res = await fetch(GET_JD_LIST.URL, requestOptions);
  const result = await res?.json();
  return result;
};
