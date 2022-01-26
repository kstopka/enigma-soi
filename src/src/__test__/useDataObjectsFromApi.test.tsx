import { renderHook } from "@testing-library/react-hooks";
import { useDataObjectsFromApi } from "../hooks/useDataObjectsFromApi";
import validJson from "./mocks/validJson.json";

describe("test useDataObjectsFromApi correctly", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        const mockSuccessResponse = validJson;
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        var globalRef: any = global;
        globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    });

    test("while fetching data", async () => {
        const { result, waitForNextUpdate } = renderHook(useDataObjectsFromApi);

        expect(result.current.imBusy).toBe(false);

        await waitForNextUpdate();
        expect(result.current.imBusy).toBe(true);
    });

    test("when got data successfully", async () => {
        const { result, waitForNextUpdate } = renderHook(useDataObjectsFromApi);

        await waitForNextUpdate();

        expect(result.current.cars[0].name).toStrictEqual("Enigma");
    });
});

describe("test useDataObjectsFromApi with an error", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        const mockFetchPromise = Promise.reject();
        var globalRef: any = global;
        globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    });
    test("with an error during request", async () => {
        const { result, waitForNextUpdate } = renderHook(useDataObjectsFromApi);
        await waitForNextUpdate();
        expect(result.current.error).toBe(true);
        expect(result.current.errorMessage).toBe("failed fetch");
    });
});
