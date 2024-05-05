import { GET_JD_LIST } from "./methods";

// method to fetch jd list
export const fetchJdList = async (body) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: GET_JD_LIST.METHOD,
    headers: myHeaders,
    body,
  };
  const res = await fetch(GET_JD_LIST.URL, requestOptions);
  const result = await res?.json();
  return result;
};
