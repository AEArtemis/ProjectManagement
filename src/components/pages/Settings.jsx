import React, { useState } from 'react';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
      </div>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-muted rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-foreground text-left">Notifications</h2>
        <div className="flex items-center justify-between">
          <span>Receive email notifications</span>
          <Switch
            checked={emailNotifications}
            onCheckedChange={() => setEmailNotifications(!emailNotifications)}
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Weekly summary report</span>
          <Switch
            checked={weeklySummary}
            onCheckedChange={() => setWeeklySummary(!weeklySummary)}
          />
        </div>
      </div>
      {/* Privacy and security */}
      <div className="bg-white dark:bg-muted rounded-lg p-6 shadow-sm w-full">
        <h2 className="text-lg font-semibold text-foreground text-left">Privacy and Security</h2>
        <h2 className="text-sm font-semibold text-foreground text-left pt-2">Login & Recovery</h2>
        <p className='text-xs text-left pb-4'>Manage your passwords, login preferences and recovery methods.</p>

        <div className='border rounded-lg'>
          <Button class="w-full border-none shadow-none text-left py-2 pl-2 rounded-md text-gray-900 dark:text-gray-100 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition" type="button" aria-label="Change Password">
            Change Password
          </Button>
           <Button class="w-full border-none shadow-none text-left py-2 pl-2 rounded-md text-gray-900 dark:text-gray-100 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition" type="button" aria-label="Change Password">
            Two-factor Authentication
          </Button>
        </div>
        <h2 className="text-sm font-semibold text-foreground text-left pt-4">Security Checks</h2>
        <p className='text-xs text-left pb-4'>Review security issues</p>
        <div className='border rounded-lg'>
          <Button class="w-full border-none shadow-none text-left py-2 pl-2 rounded-md text-gray-900 dark:text-gray-100 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition" type="button" aria-label="Change Password">
            Where you're logged in.
          </Button>
           <Button class="w-full border-none shadow-none text-left py-2 pl-2 rounded-md text-gray-900 dark:text-gray-100 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition" type="button" aria-label="Change Password">
            Login Alerts
          </Button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white dark:bg-muted rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Feedback</h2>
        <p className="text-sm text-muted-foreground">
          Help us improve your experience. Let us know your thoughts.
        </p>
        <Textarea placeholder="Your feedback..." className="min-h-[100px]" />
        <Button className="mt-2 cursor-pointer ">Submit Feedback</Button>
      </div>

      {/* Danger Zone */}
      <div className="bg-white dark:bg-muted rounded-lg p-6 shadow-sm space-y-4 border border-red-300 dark:border-red-700">
        <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
        <p className="text-sm text-muted-foreground">
          Deleting your account is irreversible. Please be certain.
        </p>
        <Button className="cursor-pointer" variant="destructive">Delete Account</Button>
      </div>
    </div>
  );
};
