import { Request, Response } from "express";
import * as PlayersService from "../services/players-service";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";


export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await PlayersService.getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    
    const httpResponse = await PlayersService.getPlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const createPlayer = async (req: Request, res: Response) => {
    const player = req.body;

    const httpResponse = await PlayersService.createPlayerService(player);

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else{
        const response = await HttpResponse.noContent();
        res.status(response.statusCode).json(response.body)
    }
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await PlayersService.deletePlayerByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updateStatisticsPlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const playerUpdate: StatisticsModel = req.body;

    const httpResponse = await PlayersService.updateStatisticsPlayerByIdService(id, playerUpdate);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};