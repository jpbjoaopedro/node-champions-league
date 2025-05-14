import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    const response = data ? await HttpResponse.ok(data) : HttpResponse.noContent();
    
    return response;
};

export const getPlayerByIdService = async (playerId: number) => {
    const data = await PlayerRepository.findPlayerById(playerId);

    const response = data ? await HttpResponse.ok(data) : HttpResponse.noContent();
    
    return response;
};