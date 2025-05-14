import { log } from "node:console";
import { PlayerModel } from "../models/player-model";
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

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player)
        response = HttpResponse.created();
    } else {
        HttpResponse.badRequest();
    }

    return response;
}; 

export const deletePlayerService = async (playerId: number) => {
    let response = null;

    if (playerId) {
        await PlayerRepository.deletePlayerById(playerId);
        response = HttpResponse.ok({ message: "deleted" });
    } else {
        response = HttpResponse.badRequest();
    }

    return response;
};