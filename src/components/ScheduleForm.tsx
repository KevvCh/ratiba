"use client";

import React from 'react';
import { FiPlus, FiSave, FiX } from 'react-icons/fi';
import { Schedule } from '../types/schedule';

interface ScheduleFormProps {
  newSchedule: Omit<Schedule, 'id'>;
  editingSchedule: Schedule | null;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setEditingSchedule: (schedule: Schedule | null) => void;
  setNewSchedule: (schedule: Omit<Schedule, 'id'>) => void;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({
  newSchedule,
  editingSchedule,
  handleInputChange,
  handleSubmit,
  setEditingSchedule,
  setNewSchedule,
}) => {
  const handleQuickAdd = (duration: number) => {
    const now = new Date();
    const startTime = now.toISOString().slice(0, 16);
    const endTime = new Date(now.getTime() + duration * 60000).toISOString().slice(0, 16);
    if (editingSchedule) {
        setEditingSchedule({
            ...editingSchedule,
            start_time: startTime,
            end_time: endTime,
        })
    } else {
        setNewSchedule({
            ...newSchedule,
            start_time: startTime,
            end_time: endTime,
        });
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
        {editingSchedule ? 'Edit Schedule' : 'Add a New Schedule'}
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={editingSchedule ? editingSchedule.title : newSchedule.title}
          onChange={handleInputChange}
          className="w-full rounded-md border border-zinc-300 bg-white p-2 text-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={editingSchedule ? editingSchedule.description ?? '' : newSchedule.description}
          onChange={handleInputChange}
          className="w-full rounded-md border border-zinc-300 bg-white p-2 text-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
        />
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <input
            type="datetime-local"
            name="start_time"
            value={
              editingSchedule
                ? new Date(editingSchedule.start_time).toISOString().slice(0, 16)
                : newSchedule.start_time
            }
            onChange={handleInputChange}
            className="w-full rounded-md border border-zinc-300 bg-white p-2 text-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            required
          />
          <input
            type="datetime-local"
            name="end_time"
            value={
              editingSchedule
                ? new Date(editingSchedule.end_time).toISOString().slice(0, 16)
                : newSchedule.end_time
            }
            onChange={handleInputChange}
            className="w-full rounded-md border border-zinc-300 bg-white p-2 text-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
            <button type="button" onClick={() => handleQuickAdd(15)} className="text-xs bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-md">15m</button>
            <button type="button" onClick={() => handleQuickAdd(30)} className="text-xs bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-md">30m</button>
            <button type="button" onClick={() => handleQuickAdd(60)} className="text-xs bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-md">1h</button>
        </div>
        <div className="flex justify-end space-x-4">
          {editingSchedule && (
            <button
              type="button"
              onClick={() => setEditingSchedule(null)}
              className="flex items-center rounded-md bg-zinc-200 px-4 py-2 text-black transition-colors hover:bg-zinc-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
            >
              <FiX className="mr-2" />
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="flex items-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            {editingSchedule ? <FiSave className="mr-2" /> : <FiPlus className="mr-2" />}
            {editingSchedule ? 'Update Schedule' : 'Add Schedule'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleForm;
