import { client } from "../utils/config";

// Currently using the restart route to start since the process already exists
const startProcess = async (process: number) => {
  try {
    const { data, status }: { data: any; status: number } = await client.post(
      "/restart",
      {
        process,
      }
    );
    if (status !== 200) {
      throw new Error(status.toString());
    }
    return data;
  } catch (error) {
    console.error("Error ocurred on startProcess", error);
  }
};

const stopProcess = async (process: number): Promise<boolean | undefined> => {
  try {
    const { data, status }: { data: boolean; status: number } =
      await client.post("/stop", {
        process,
      });
    if (status !== 200) {
      throw new Error(status.toString());
    }
    return data;
  } catch (error) {
    console.error(`Error on stopProcess with process ${process}`, error);
  }
};

const restartProcess = async (
  process: number
): Promise<boolean | undefined> => {
  try {
    const { data, status }: { data: boolean; status: number } =
      await client.post("/restart", {
        process,
      });
    if (status !== 200) {
      throw new Error(status.toString());
    }
    return data;
  } catch (error) {
    console.error(`Error on restart process. Process ID: ${process}`, error);
  }
};

export { startProcess, stopProcess, restartProcess };
