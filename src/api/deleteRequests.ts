import { client } from "../utils/config";

const deleteProcess = async (process: number): Promise<boolean | undefined> => {
  try {
    const { data, status }: { data: any; status: number } = await client.delete(
      "/delete",
      {
        params: {
          process,
        },
      }
    );
    if (status !== 200) {
      throw new Error(status.toString());
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { deleteProcess };
