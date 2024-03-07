export const DIE_TYPE = {
    D20: 20,
    D12: 12,
    D10: 10,
    D8: 8,
    D6: 6,
    D4: 4,
    D2: 2
}

export const useDice = ({
    dieType = 20,
    modifier = 0,
    diceCount = 1,
}) => {
    const equation = () => Math.round(1 + Math.random() * (dieType - 1))

    const roll = () => {
        const results = []
        let sum = 0;
        for(let i = 0; i < diceCount; i++) {
            const roll = equation();
            results.push(roll)
            sum += roll;
        }

        console.info(results, sum + modifier)

        return {
            results,
            total: sum + modifier
        }
    }

    const disadvantage = () => {
        const roll1 = roll()
        const roll2 = roll()
            
        return {
            result: roll1.total < roll2.total ? roll1 : roll2 ,
            rolls: [roll1, roll2]
        }        
    }
    const advantage = () => {
        const roll1 = roll()
        const roll2 = roll()
            
        return {
            result: roll1.total > roll2.total ? roll1 : roll2 ,
            rolls: [roll1, roll2]
        }
    }

    return { roll, advantage, disadvantage }
    
}