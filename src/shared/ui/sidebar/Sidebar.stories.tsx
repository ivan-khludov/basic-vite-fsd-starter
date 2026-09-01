import type { Meta, StoryObj } from '@storybook/react-vite';

import { TooltipProvider } from '@/shared/ui/tooltip';

import { Sidebar } from './Sidebar';
import { SidebarContent } from './SidebarContent';
import { SidebarGroup } from './SidebarGroup';
import { SidebarGroupContent } from './SidebarGroupContent';
import { SidebarGroupLabel } from './SidebarGroupLabel';
import { SidebarMenu } from './SidebarMenu';
import { SidebarMenuButton } from './SidebarMenuButton';
import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarProvider } from './SidebarProvider';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Shared/Sidebar',
  argTypes: {
    variant: {
      control: 'select',
      options: ['sidebar', 'floating', 'inset']
    },
    collapsible: {
      control: 'select',
      options: ['offcanvas', 'icon', 'none']
    },
    side: { control: 'select', options: ['left', 'right'] }
  }
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => {
    return (
      <TooltipProvider>
        <SidebarProvider>
          <Sidebar collapsible="none" className="min-h-[240px] w-56 border">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>Inbox</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Drafts</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </TooltipProvider>
    );
  }
};
