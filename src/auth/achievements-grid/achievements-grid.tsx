import { useAchievements } from '@dread-ui/providers/achievements-provider';
import { AchievementSquare } from './achievement-square';
import { Achievement } from '@dread-ui/types';
import { useState } from 'react';
import MapBorder from './map-border';
import backgroundImage from '@dread-ui/assets/kid-icarus-background.png';

const AchievementsGrid = () => {
  const { achievements } = useAchievements();
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  const selectAchievement = (achievement: Achievement | null) => {
    setSelectedAchievement(achievement);
  };

  return (
    <div className='bg-primary flex overflow-auto'>
      <MapBorder>
        <div
          className='grid h-full w-full shrink-0 grid-cols-10 grid-rows-10 bg-cover'
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {achievements.map((achievement) => (
            <AchievementSquare
              key={achievement.id}
              achievement={achievement}
              selectedAchievement={selectedAchievement}
              selectAchievement={selectAchievement}
            />
          ))}
        </div>
      </MapBorder>
    </div>
  );
};

export { AchievementsGrid };
