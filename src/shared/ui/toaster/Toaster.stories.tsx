import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';

import { Button } from '@/shared/ui/button';

import { Toaster } from './Toaster';

const meta: Meta<typeof Toaster> = {
  title: 'Shared/Toaster',
  component: Toaster
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    const handleSuccess = () => {
      toast.success('Success toast');
    };

    const handleError = () => {
      toast.error('Error toast');
    };

    const handleLoading = () => {
      const id = toast.loading('Loading…');
      window.setTimeout(() => {
        toast.dismiss(id);
        toast.success('Done');
      }, 1000);
    };

    return (
      <div className="space-y-3">
        <Toaster />
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" onClick={handleSuccess}>
            Success
          </Button>
          <Button size="sm" variant="destructive" onClick={handleError}>
            Error
          </Button>
          <Button size="sm" variant="outline" onClick={handleLoading}>
            Loading
          </Button>
        </div>
      </div>
    );
  }
};
