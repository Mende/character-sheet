export const getModifier = (score:number) => Math.floor((score - 10)/2);

export interface AbilityScores {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
}