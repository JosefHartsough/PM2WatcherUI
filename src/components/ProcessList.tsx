import { useState, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { listProcesses } from "../api/getRequests";
import { ProcessListData } from "../types/types";

// TODO: Move all styling to css modules

const ColumnHeaders = [
  "PM2 ID",
  "PID",
  "Name",
  "Status",
  "Uptime",
  "Restarts",
  "CPU",
  "Memory",
];

export default function ProcessList(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const [processes, setProcesses] = useState<ProcessListData[]>();

  // Requests
  const getListOfProcesses = async () => {
    try {
      const data = await listProcesses();
      setProcesses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListOfProcesses();
  }, []);

  const columnHeader = (header: string, index: number) => {
    return (
      <td
        className={`column_header_${header}`}
        key={index}
        style={{
          border: "1px solid",
          textAlign: "left",
          fontWeight: "800",
          padding: "10px",
        }}
      >
        {header}
      </td>
    );
  };

  const TableCell = ({ children, name }: any) => (
    <td
      className={`table_cell_${name}`}
      style={{ border: "1px solid", padding: "10px" }}
    >
      {children}
    </td>
  );

  return (
    <>
      <div
        className="table_header"
        style={{
          backgroundColor: "#3298dc",
          borderRadius: "6px 6px 0 0",
          fontSize: "1.25em",
          fontWeight: "700",
          padding: ".75em 1em",
          color: "#fff",
        }}
      >
        Applications
      </div>
      <div
        className="applications_table_container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          maxWidth: "1200px",
          boxShadow:
            "0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02)",
        }}
      >
        <table
          className="applications_table"
          style={{
            display: "table",
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "6px 6px 0 0",
          }}
        >
          <thead>
            <tr
              className="applications_table_row"
              style={{ display: "table-row" }}
            >
              {ColumnHeaders.map((header: string, idx: number) =>
                columnHeader(header, idx)
              )}
            </tr>
            {processes?.map((p: ProcessListData) => (
              <tr
                onClick={() => navigate(`/${p.pmId}`)}
                style={{
                  display: "table-row",
                  cursor: "pointer",
                }}
                key={p.pmId}
              >
                <TableCell name={"pm_id"}>{p.pmId}</TableCell>
                <TableCell name={"pid"}>{p.pid}</TableCell>
                <TableCell name={"name"}>{p.name}</TableCell>
                <TableCell name={"status"}>{p.status}</TableCell>
                <TableCell name={"uptime"}>{p.uptime}</TableCell>
                <TableCell name={"restarts"}>{p.restarts}</TableCell>
                <TableCell name={"cpu"}>{p.cpu}</TableCell>
                <TableCell name={"memory"}>{p.memory}</TableCell>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </>
  );
}
