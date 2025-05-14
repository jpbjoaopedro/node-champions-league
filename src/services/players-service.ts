import * as PlayerRepository from "../repositories/players-repository";
import { ok, noContent } from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    const response = data ? await ok(data) : noContent();
    
    return response;
};