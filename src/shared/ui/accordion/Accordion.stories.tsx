import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './index';

const meta = {
  component: Accordion,
  title: 'Shared/Accordion',
  tags: ['autodocs']
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion collapsible type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          <p>
            Yes. It comes with default styles that match the rest of the design
            system.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          <p>Yes. It uses CSS animations for expand/collapse.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};
