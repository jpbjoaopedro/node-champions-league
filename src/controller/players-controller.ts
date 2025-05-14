import { Request, Response } from "express";
import * as PlayersService from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
    const data = await PlayersService.getPlayerService();

    res.status(data.statusCode).json(data.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    
    const data = await PlayersService.getPlayerByIdService(id);

    res.status(data.statusCode).json(data.body);
}