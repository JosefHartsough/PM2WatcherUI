export default function EnvironmentPanel({ details }: any) {
  const keys = Object.keys(details.env);

  console.log("values", details.env);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ENV Variable</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((k) => {
            console.log(details.env.k);
            return (
              <tr>
                <td>{k}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
