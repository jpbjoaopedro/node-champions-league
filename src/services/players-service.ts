import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    const response = data ? await HttpResponse.ok(data) : await HttpResponse.noContent();
    
    return response;
};

export const getPlayerByIdService = async (playerId: number) => {
    const data = await PlayerRepository.findPlayerById(playerId);

    const response = data ? await HttpResponse.ok(data) : await HttpResponse.noContent();
    
    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player)
        response = await HttpResponse.created();
    } else {
        await HttpResponse.badRequest();
    }

    return response;
}; 

export const deletePlayerByIdService = async (playerId: number) => {
    let response = null;
    const idDeleted = await PlayerRepository.deletePlayerById(playerId);

    if (idDeleted) {
        response = await HttpResponse.ok({ message: "deleted" });
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
};

export const updateStatisticsPlayerByIdService = async (id: number, statistics: StatisticsModel) => {
    const data = await PlayerRepository.updateStatisticsPlayerById(id, statistics);
    const response = await HttpResponse.ok(data)
    return response;
};