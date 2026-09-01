import type { Meta, StoryObj } from '@storybook/react-vite';

import { Questionnaire } from './Questionnaire';
import { QuestionnaireActions } from './QuestionnaireActions';
import { QuestionnaireChoice } from './QuestionnaireChoice';
import { QuestionnaireChoices } from './QuestionnaireChoices';
import { QuestionnaireItem } from './QuestionnaireItem';
import { QuestionnaireProgress } from './QuestionnaireProgress';
import { QuestionnaireSubmit } from './QuestionnaireSubmit';
import { QuestionnaireTitle } from './QuestionnaireTitle';

const items = [
  {
    name: 'plan',
    choices: [{ value: 'starter' }, { value: 'pro' }]
  }
] as const;

const meta: Meta<typeof Questionnaire> = {
  component: Questionnaire,
  title: 'Shared/Questionnaire'
};

export default meta;

type Story = StoryObj<typeof Questionnaire>;

export const Default: Story = {
  render: () => {
    return (
      <Questionnaire items={items} className="max-w-md">
        <QuestionnaireProgress />
        <QuestionnaireItem name="plan">
          <QuestionnaireTitle>Choose a plan</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="starter">Starter</QuestionnaireChoice>
            <QuestionnaireChoice value="pro">Pro</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit />
        </QuestionnaireActions>
      </Questionnaire>
    );
  }
};
