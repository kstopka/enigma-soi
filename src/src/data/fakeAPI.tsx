import data from "./data.json";
import { JSONlike } from "../App.d";

export type MockedDataType = (success: boolean, timeout?: number) => Promise<JSONlike[]>;

const mockedData: MockedDataType = (success = true, timeout = 1000) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(data.objects);
            }
            reject({ error: true, message: "failed fetch" });
        }, timeout);
    });

export default mockedData;
