import ProcessList from "../components/ProcessList";

export default function Home(): JSX.Element {
  return (
    <div
      className="home_applications"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "96vh",
      }}
    >
      <section className="application_table">
        <ProcessList />
      </section>
    </div>
  );
}
