export default function DetailsPanel({ details }: any): JSX.Element {
  const TableCell = ({
    children,
    name,
  }: {
    children: React.ReactNode;
    name: string;
  }) => (
    <td
      className={`table_cell_${name}`}
      style={{ textAlign: "center", border: "1px solid", padding: "10px" }}
    >
      {children}
    </td>
  );

  const HeaderCell = ({
    children,
    name,
  }: {
    children: React.ReactNode;
    name: string;
  }) => (
    <th
      className={`table_header_${name}`}
      style={{ width: "25%", border: "1px solid", padding: "10px" }}
    >
      {children}
    </th>
  );
  return (
    <div
      className="tab_details"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "10px",
      }}
    >
      <div>
        <label
          style={{ marginBottom: "0.75rem" }}
          className="label_script_path"
        >
          Script Path
        </label>
        <div>
          <input
            className="pm_script_log_path"
            style={{ width: "99%" }}
            type="text"
            readOnly
            value={details?.scriptPath}
          />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div style={{ display: "block" }}>
          <label className="label_output_path">Output Path</label>
          <input
            className="pm_output_log_path"
            style={{ width: "98%" }}
            type="text"
            readOnly
            value={details?.pmOutLogPath}
          />
        </div>
        <div style={{ display: "block" }}>
          <label className="label_error_path">Error Path</label>
          <input
            className="pm_error_log_path"
            style={{ width: "98%" }}
            type="text"
            readOnly
            value={details?.pmErrorLogPath}
          />
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <table
          className="applications_table"
          style={{
            display: "table",
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "6px 6px 0 0",
          }}
        >
          <tr>
            <HeaderCell name="pm_id">PM ID</HeaderCell>
            <HeaderCell name="pid">PID</HeaderCell>
            <HeaderCell name="exec_mode">Exec Mode</HeaderCell>
            <HeaderCell name="exec_interpreter">Exec Interpreter</HeaderCell>
          </tr>
          <tr>
            <TableCell name="pm_id">{details?.pmId}</TableCell>
            <TableCell name="pid">{details?.pid}</TableCell>
            <TableCell name="exec_mode">{details?.execMode}</TableCell>
            <TableCell name="exec_interpreter">
              {details?.execInterpreter}
            </TableCell>
          </tr>
        </table>
        <table
          className="applications_table"
          style={{
            display: "table",
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "6px 6px 0 0",
          }}
        >
          <tr>
            <td
              style={{
                textAlign: "center",
                width: "50%",
                border: "1px solid",
                padding: "10px",
              }}
            >
              Restarts
            </td>
            <td
              style={{
                textAlign: "center",
                width: "50%",
                border: "1px solid",
                padding: "10px",
              }}
            >
              Unstable Restarts
            </td>
          </tr>
          <tr>
            <TableCell name="restarts">{details?.restarts}</TableCell>
            <TableCell name="unstable_restarts">
              {details?.unstableRestarts}
            </TableCell>
          </tr>
        </table>
      </div>
    </div>
  );
}
