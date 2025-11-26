"use client";

import React from 'react';
import { Schedule } from '../types/schedule';
import ScheduleItem from './ScheduleItem';

interface ScheduleListProps {
  schedules: Schedule[];
  handleEdit: (schedule: Schedule) => void;
  handleDelete: (id: string) => void;
}

const ScheduleList: React.FC<ScheduleListProps> = ({ schedules, handleEdit, handleDelete }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Schedules</h2>
      <ul className="mt-4 space-y-4">
        {schedules.map((schedule) => (
          <ScheduleItem
            key={schedule.id}
            schedule={schedule}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
