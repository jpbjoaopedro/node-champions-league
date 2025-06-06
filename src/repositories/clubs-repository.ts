import { ClubModel } from "../models/clubs-model";
import fs from "fs";

const database: ClubModel[] = [
    {
        id: 1,
        name: "Manchester United",
        country: "England",
        league: "Premier League",
        founded: 1878,
        stadium: "Old Trafford",
        capacity: 74879,
        manager: "Erik ten Hag",
        players: ["Bruno Fernandes", "Marcus Rashford", "Casemiro"]
    },
    {
        id: 2,
        name: "Liverpool",
        country: "England",
        league: "Premier League",
        founded: 1892,
        stadium: "Anfield",
        capacity: 54074,
        manager: "Jürgen Klopp",
        players: ["Mohamed Salah", "Virgil van Dijk", "Alisson Becker"]
    },
    {
        id: 3,
        name: "Chelsea",
        country: "England",
        league: "Premier League",
        founded: 1905,
        stadium: "Stamford Bridge",
        capacity: 40834,
        manager: "Mauricio Pochettino",
        players: ["Enzo Fernández", "Raheem Sterling", "Kai Havertz"]
    },
];

export const getAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.promises.readFile("./src/data/clubs.json", "utf-8");

    const clubs: ClubModel[] = JSON.parse(data);

    return clubs;
};