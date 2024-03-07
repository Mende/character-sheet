'use client'

import React from 'react';
import { AbilityScores } from '@/lib/AbilityUtility'

export const AbilityContext = React.createContext({
    STR: 10,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10
});

export const AbilityProvider = ({ scores, children }: {scores: AbilityScores, children: any}) => {
    

    return (
        <AbilityContext.Provider value={scores}>
            {children}
        </AbilityContext.Provider>
    );
}