/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  NavigateFunction,
  Location,
} from "react-router-dom";
import {
  describe,
  startProcess,
  stopProcess,
  restartProcess,
  deleteProcess,
} from "../api/index";
import {
  DetailsPanel,
  EnvironmentPanel,
  LogsPanel,
  Button,
  NotificationsPanel,
} from "./index";
import { ProcessDetails as pmProcessdetails } from "../types/types";

const Tabs = [
  {
    id: 1,
    label: "Monitoring",
  },
  {
    id: 2,
    label: "Details",
  },
  {
    id: 3,
    label: "Environment",
  },
  {
    id: 4,
    label: "Logs",
  },
  {
    id: 5,
    label: "Notifications",
  },
];

const bytesInMb = 1024 ** 2;

export default function ProcessDetails(): JSX.Element {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const { pathname }: { pathname: string } = location;
  const pmId: number = parseInt(pathname.split("/")[1]);

  const [details, setDetails] = useState<pmProcessdetails>();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isOnline, setIsOnline] = useState<boolean>();

  /** Requests */
  // TODO: Error handling for all requests
  const getDetails = async () => {
    const result = await describe(pmId);
    const { data } = result;
    setDetails(data);
  };

  const start = async () => {
    const { status }: { status: boolean } = await startProcess(pmId);
    setIsOnline(status);
  };

  const stop = async () => {
    await stopProcess(pmId);
    setIsOnline(false);
  };

  const restart = async () => {
    setIsOnline(false);
    await restartProcess(pmId);
    setIsOnline(true);
  };

  const _delete = async () => {
    await deleteProcess(pmId);
    setIsOnline(false);
    navigate("/");
  };

  useEffect(() => {
    getDetails();
  }, [location, isOnline]);

  return (
    <main style={{ padding: "3rem 1.5rem", margin: 0 }}>
      <div
        style={{
          borderRadius: "6px 6px 0 0",
          boxShadow:
            "0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02)",
          fontSize: "1.2rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
          color: "white",
        }}
      >
        <div
          className="process_details_header"
          style={{
            backgroundColor: "#3298dc",
            borderRadius: "6px 6px 0 0",
            boxShadow:
              "0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02)",
            padding: "1em 1em",
          }}
        >
          {details?.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {details?.status === "online" ? (
            <Button variant="stop" onClick={stop}>
              Stop
            </Button>
          ) : (
            <Button variant="start" onClick={start}>
              Start
            </Button>
          )}

          <Button variant="restart" disabled={!isOnline} onClick={restart}>
            Restart
          </Button>
          <Button variant="delete" onClick={_delete}>
            Delete
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "6px 6px 0 0",
          boxShadow:
            "0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02)",
          padding: "0.25rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            justifyContent: "center",
          }}
        >
          {Tabs.map((tab: any, index: number) => (
            <li
              key={index}
              onClick={() => setSelectedTab(index)}
              style={{
                padding: "0.5rem 0.75rem",
                fontWeight: 700,
                fontSize: "1.5em",
                borderBottom:
                  selectedTab === index
                    ? "1px solid black"
                    : "1px solid #dbdbdb",
              }}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        {selectedTab === 0 && (
          <div
            className="tab_monitoring_containerr"
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <h2 style={{ margin: "10px" }}>Status</h2>
              <h3 style={{ textAlign: "center", fontWeight: "100" }}>
                {details?.status}
              </h3>
            </div>
            <div>
              <h2 style={{ margin: "10px" }}>Memory</h2>
              <h3 style={{ textAlign: "center", fontWeight: "100" }}>
                {(details?.memory! / bytesInMb).toFixed(2)}mb
              </h3>
            </div>
            <div>
              <h2 style={{ margin: "10px" }}>CPU</h2>
              <h3 style={{ textAlign: "center", fontWeight: "100" }}>
                {details?.cpu}%
              </h3>
            </div>
          </div>
        )}

        {selectedTab === 1 && <DetailsPanel details={details} />}
        {selectedTab === 2 && <EnvironmentPanel details={details} />}
        {selectedTab === 3 && <LogsPanel />}
        {selectedTab === 4 && <NotificationsPanel />}
      </div>
    </main>
  );
}
