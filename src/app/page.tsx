"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Schedule } from '../types/schedule';
import Header from '../components/Header';
import ScheduleForm from '../components/ScheduleForm';
import ScheduleList from '../components/ScheduleList';

export default function Home() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [newSchedule, setNewSchedule] = useState<Omit<Schedule, 'id'>>({
    title: '',
    description: '',
    start_time: '',
    end_time: '',
  });
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    const { data: schedules, error } = await supabase.from('schedules').select('*');
    if (error) console.error('Error fetching schedules:', error);
    else setSchedules(schedules as Schedule[]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editingSchedule) {
      setEditingSchedule({ ...editingSchedule, [name]: value });
    } else {
      setNewSchedule({ ...newSchedule, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSchedule) {
      // Update existing schedule
      const { data, error } = await supabase
        .from('schedules')
        .update({
          title: editingSchedule.title,
          description: editingSchedule.description,
          start_time: editingSchedule.start_time,
          end_time: editingSchedule.end_time,
        })
        .eq('id', editingSchedule.id);
      if (error) console.error('Error updating schedule:', error);
      else {
        setSchedules(
          schedules.map((schedule) =>
            schedule.id === editingSchedule.id ? (editingSchedule as Schedule) : schedule
          )
        );
        setEditingSchedule(null);
      }
    } else {
      // Add new schedule
      const { data, error } = await supabase
        .from('schedules')
        .insert([
          {
            title: newSchedule.title,
            description: newSchedule.description,
            start_time: newSchedule.start_time,
            end_time: newSchedule.end_time,
          },
        ])
        .select(); // Important to get the newly created record back
      if (error) {
        console.error('Error adding schedule:', error);
      } else if (data) {
        setSchedules([...schedules, data[0] as Schedule]);
        setNewSchedule({ title: '', description: '', start_time: '', end_time: '' });
      }
    }
  };

  const handleEdit = (schedule: Schedule) => {
    setEditingSchedule({ ...schedule });
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('schedules').delete().eq('id', id);
    if (error) console.error('Error deleting schedule:', error);
    else setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 p-4 sm:p-8 font-sans dark:bg-black">
      <Header />

      <main className="mt-8 w-full max-w-4xl">
        <ScheduleForm
          newSchedule={newSchedule}
          editingSchedule={editingSchedule}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setEditingSchedule={setEditingSchedule}
          setNewSchedule={setNewSchedule}
        />

        <ScheduleList
          schedules={schedules}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}