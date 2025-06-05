import React from 'react';
import List from '@mui/material/List';
import { Activity } from '../../types/Activity';
import ActivityItem from './ActivityItem';

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <List>
      {activities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </List>
  );
}
