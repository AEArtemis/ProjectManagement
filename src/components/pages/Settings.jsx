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
        <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
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

      {/* Feedback Section */}
      <div className="bg-white dark:bg-muted rounded-lg p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Feedback</h2>
        <p className="text-sm text-muted-foreground">
          Help us improve your experience. Let us know your thoughts.
        </p>
        <Textarea placeholder="Your feedback..." className="min-h-[100px]" />
        <Button className="mt-2">Submit Feedback</Button>
      </div>

      {/* Danger Zone */}
      <div className="bg-white dark:bg-muted rounded-lg p-6 shadow-sm space-y-4 border border-red-300 dark:border-red-700">
        <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
        <p className="text-sm text-muted-foreground">
          Deleting your account is irreversible. Please be certain.
        </p>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </div>
  );
};
