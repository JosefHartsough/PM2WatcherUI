import { client } from "../utils/config";
import { ProcessListData } from "../types/types";

const listProcesses = async (): Promise<ProcessListData[] | undefined> => {
  try {
    const { data, status }: { data: ProcessListData[]; status: number } =
      await client.get<ProcessListData[]>("/processes");
    if (status !== 200) {
      throw new Error(status.toString());
    }
    return data;
  } catch (error) {
    console.error("Error occurred on listProcesses", error);
  }
};

const describe = async (pmId: number): Promise<any> => {
  try {
    const { data, status } = await client.get("/describe", {
      params: {
        process: pmId,
      },
    });
    if (status !== 200) {
      throw new Error(status.toString());
    }
    return data;
  } catch (error) {
    console.error("Error occurred on describe", error);
  }
};

const getLogs = async (process: number): Promise<any> => {
  const { data, status } = await client.get("/logs", {
    params: {
      process,
    },
  });
  const { logs } = data;
  return logs;
};

const getErrorLogs = async (): Promise<any> => {
  const { data } = await client.get("/errorlogs");
};

export { listProcesses, describe, getLogs, getErrorLogs };
