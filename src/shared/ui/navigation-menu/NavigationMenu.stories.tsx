import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavigationMenu } from './NavigationMenu';
import { NavigationMenuContent } from './NavigationMenuContent';
import { NavigationMenuItem } from './NavigationMenuItem';
import { NavigationMenuLink } from './NavigationMenuLink';
import { NavigationMenuList } from './NavigationMenuList';
import { NavigationMenuTrigger } from './NavigationMenuTrigger';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  title: 'Shared/NavigationMenu'
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1 p-1">
                <li>
                  <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Installation</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Docs</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
};
