'use client'

import { useDice } from '../Hooks/DiceHook/useDice';
import { getModifier } from '@/lib/AbilityUtility';

interface StatsBlockProps {
    score: number;
    name: string;
}

export const StatsBlock = ({ score }: StatsBlockProps) => {
    const modifier = getModifier(score);
    const { roll } = useDice({ modifier  })

    const handleRoll = () => {
        console.info(roll())
    }
    return (
        <div className="card">
            <h1>{score}</h1>
            <h3>{modifier}</h3>
            <button className="button" onClick={handleRoll}>Roll</button>
        </div>
    )
}