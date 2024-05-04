import { useEffect, useState } from "react";
// styles
import "./App.css";
// components
import { Card } from "./components";

function App() {
  const [data, setData] = useState(null);

  const fetchJobList = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const body = JSON.stringify({
        limit: 10,
        offset: 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const res = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );

      const result = await res?.json();

      if (result?.jdList.length > 0) {
        setData(result.jdList);
      }
    } catch (error) {
      console.error("fetchJobList", error);
    }
  };
  console.log("data", data);

  useEffect(() => {
    fetchJobList();
  }, []);

  return (
    <div className="App">
      <div>Filters</div>
      <div>
        Min experience Company name Location Remote/on-site Tech stack Role Min
        base pay
      </div>

      <div className="JobsContainer">
        {data?.map((job) => (
          <Card key={job.jdUid} data={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
