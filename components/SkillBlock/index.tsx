'use client'

import { AbilityScores, getModifier } from '@/lib/AbilityUtility';
import { AbilityContext } from '@/components/Context/AbilityContext';
import React from 'react';
import { useDice } from '@/components/Hooks/DiceHook/useDice'

interface SkillBlockProps {
    name: string;
    baseAbility: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
}

export const SkillBlock = ({ name, baseAbility }: SkillBlockProps) => {
    const abilityScores: AbilityScores = React.useContext(AbilityContext)
    const score = abilityScores[baseAbility];
    const modifier = getModifier(score);
    const { roll } = useDice({ modifier })
    const handleClick = () => console.info(roll());
    return (
        <div>
            <button onClick={handleClick}>{`[${modifier}] ${name} (${baseAbility})`}</button>
        </div>
    )

}
