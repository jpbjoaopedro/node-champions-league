export interface PlayerModel {
    id: number;
    name: string;
    club: string
    nationality: string;
    position: string;
    age: number;
    statistics: {
        Overall: number;
        Attack: number;
        Defense: number;
        Passing: number;
        Dribbling: number;
        Physical: number;
    };
}