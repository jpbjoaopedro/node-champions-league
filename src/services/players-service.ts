import { ok, noContent } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = { player: "Messi" }

    const response = data ? await ok(data) : noContent();

    return response;
}