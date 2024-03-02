import type { Meta, StoryObj } from '@storybook/react';

import { AchievementsGrid } from './achievements-grid';
import { AuthProvider } from '@dread-ui/providers/auth-provider';
import { AchievementsProvider } from '@dread-ui/providers/achievements-provider';
import { Toaster } from '@dread-ui/index';

const meta: Meta<typeof AchievementsGrid> = {
  component: AchievementsGrid,
  title: 'Firebase/Achievements Grid',
  decorators: [
    (Story) => (
      <AuthProvider>
        <AchievementsProvider>
          <Story />
          <Toaster closeButton />
        </AchievementsProvider>
      </AuthProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AchievementsGrid>;

export const Demo: Story = {};
