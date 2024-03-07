'use client'

import { SkillBlock } from '@/components/SkillBlock';
import { StatsBlock } from '@/components/StatsBlock'
import { AbilityContext } from '@/components/Context/AbilityContext';
import React from 'react';

export default function Home() {

  const abilityScores = React.useContext(AbilityContext);
  const order = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  return (
    <main className="m-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid grid-rows-9 gap-4">
            <div className="row-span-2 bg-yellow-500">Character Info</div>
            <div className="row-span-7">
              <div className="grid grid-cols-9 gap-4">
                <div className="col-span-1 bg-purple-400">
                  <StatsBlock name="STR"/>
                </div>
                <div className="col-span-2 bg-orange-400">
                  <SkillBlock name="Acrobatics" baseAbility="STR" proficient={false}/>
                </div>
                <div className="col-span-6 bg-gray-400">stuff</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-green-500">Additional Stuff</div>
        
      </div>
    </main>
  );
}
