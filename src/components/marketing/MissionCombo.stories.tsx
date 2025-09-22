import type { Meta, StoryObj } from '@storybook/react';
import MissionCombo, { MissionComboProps } from './MissionCombo';
import content from '@/content/marketing.json';

const baseContent = (content as { missionCombo: MissionComboProps }).missionCombo;

const meta = {
  title: 'Marketing/MissionCombo',
  component: MissionCombo,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  args: baseContent
} satisfies Meta<typeof MissionCombo>;

export default meta;

type Story = StoryObj<MissionComboProps>;

export const WithExactCopy: Story = {};

export const TweakCopyLive: Story = {
  args: {
    mission: { ...baseContent.mission, title: 'Tailor Copy In Real Time' },
    support: baseContent.support.map((item) => ({ ...item })) as MissionComboProps['support']
  }
};
