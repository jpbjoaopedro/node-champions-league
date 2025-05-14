import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {id: 1, name: "Messi"},
    {id: 2, name: "Cristiano Ronaldo"},
    {id: 3, name: "Neymar"},
    {id: 4, name: "Mbappe"},
    {id: 5, name: "Kevin De Bruyne"},
    {id: 6, name: "Robert Lewandowski"},
    {id: 7, name: "Karim Benzema"},
    {id: 8, name: "Luka Modric"},
    {id: 10, name: "Virgil van Dijk"},
    {id: 11, name: "Sadio Mane"},
    {id: 12, name: "Mohamed Salah"},
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async(
    id: number
): Promise<PlayerModel | undefined> => {
    const player = database.find((d) => d.id === id);
    
    return player;
}