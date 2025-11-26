"use client";

import React from 'react';
import { FiEdit, FiTrash2, FiArrowRight } from 'react-icons/fi';
import { Schedule } from '../types/schedule';

interface ScheduleItemProps {
  schedule: Schedule;
  handleEdit: (schedule: Schedule) => void;
  handleDelete: (id: string) => void;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ schedule, handleEdit, handleDelete }) => {
  return (
    <li className="rounded-lg bg-white p-4 shadow-md dark:bg-zinc-900">
      <h3 className="text-xl font-bold text-black dark:text-zinc-50">{schedule.title}</h3>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{schedule.description}</p>
      <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center">
            <span className="font-semibold">{new Date(schedule.start_time).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center mt-1">
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-full px-2 py-1 text-xs">
              {new Date(schedule.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <FiArrowRight className="mx-2" />
            <div className="bg-zinc-200 dark:bg-zinc-700 rounded-full px-2 py-1 text-xs">
              {new Date(schedule.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => handleEdit(schedule)}
          className="flex items-center rounded-md bg-yellow-500 px-3 py-1 text-white transition-colors hover:bg-yellow-600"
        >
          <FiEdit className="mr-2" />
          Edit
        </button>
        <button
          onClick={() => handleDelete(schedule.id)}
          className="flex items-center rounded-md bg-red-600 px-3 py-1 text-white transition-colors hover:bg-red-700"
        >
          <FiTrash2 className="mr-2" />
          Delete
        </button>
      </div>
    </li>
  );
};

export default ScheduleItem;
