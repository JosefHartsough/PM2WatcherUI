import { useEffect, useState } from "react";

import { getLogs, getErrorLogs } from "../api/index";

export default function LogsPanel() {
  const [logData, setLogData] = useState<string>();
  const [errorLogData, setErrorLogData] = useState<string>();
  useEffect(() => {
    async function fetchData() {
      const result = await getLogs(1);
      // const errorLog = await getErrorLogs();
      setLogData(result);
    }
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div style={{ flexGrow: 1, flexBasis: "33.33%" }}>
        <h3>Out Log</h3>
        <textarea
          style={{ height: "60vh", width: "25vw" }}
          readOnly
          value={logData}
        />
      </div>
      <div style={{ flexGrow: 1, flexBasis: "33.33%" }}>
        <h3>Error Log</h3>
        <textarea
          style={{ height: "60vh", width: "25vw" }}
          readOnly
          value={logData}
        />
      </div>
      <div style={{ flexGrow: 1, flexBasis: "33.33%" }}>
        <h3>Custom Log</h3>
        <textarea
          style={{ height: "60vh", width: "25vw" }}
          readOnly
          value={logData}
        />
      </div>
    </div>
  );
}
