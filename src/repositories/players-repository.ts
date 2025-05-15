import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        id: 1, 
        name: "Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        age: 36,
        position: "Forward",
        statistics: {
            Overall: 85,
            Attack: 90,
            Defense: 80,
            Passing: 88,
            Dribbling: 95,
            Physical: 75,
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        age: 38,
        position: "Forward",
        statistics: {
            Overall: 90,
            Attack: 95,
            Defense: 85,
            Passing: 92,
            Dribbling: 97,
            Physical: 80,
        },
    },
    {
        id: 3,
        name: "Neymar",
        club: "Al Hilal",
        nationality: "Brazil",
        age: 31,
        position: "Forward",
        statistics: {
            Overall: 88,
            Attack: 92,
            Defense: 78,
            Passing: 90,
            Dribbling: 95,
            Physical: 70,
        },
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        age: 24,
        position: "Forward",
        statistics: {
            Overall: 89,
            Attack: 95,
            Defense: 78,
            Passing: 90,
            Dribbling: 95,
            Physical: 75,
        },
    },
    {
        id: 5,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        age: 32,
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Attack: 85,
            Defense: 80,
            Passing: 95,
            Dribbling: 90,
            Physical: 78,
        },
    },

]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    const player = database.find((d) => d.id === id);

    return player;
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
};

export const deletePlayerById = async (playerId: number) => {
    const playerIndex = database.findIndex((player) => player.id === playerId);
    
    if (playerIndex !== -1) {
        database.splice(playerIndex, 1);
        return true;
    }

    return false;
};

export const updateStatisticsPlayerById = async (playerId: number, playerStatistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex((player) => player.id === playerId);

    if (playerIndex !== 1) {
        database[playerIndex].statistics = playerStatistics;
    }

    return database[playerIndex];
};