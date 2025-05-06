'use client';

import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { use, useState } from 'react';

import Button from "@/components/button";
import Container from "@/components/container";
import Card from "@/components/card";
import TaskCard from "@/components/taskcard";

type Task = {
  id: number;
  title: string;
  description?: string;
};

export default function Home() {
  const { register, handleSubmit, reset, setValue } = useForm<Task>();
  const [tasks, setTasks] = useState<Task[]>([]);

  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const onSubmit = (data: Omit<Task, "id">) => {
    if (editingTaskId !== null) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTaskId ? { ...task, ...data } : task
        )
      );
      setEditingTaskId(null);
    } else {
      const newTask = { ...data, id: Date.now() };
      setTasks((prev) => [...prev, newTask]);
    }
    reset();
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEdit = (task: Task) => {
    setValue("title", task.title);
    setValue("description", task.description || "");
    setEditingTaskId(task.id);
  };

  return (
    <Container className="bg-gray-100 flex-col min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Lista de Tarefas</h1>

      <Card className="w-full p-8 flex flex-col gap-4">
        {editingTaskId ? "Editar Tarefa" : "Adicionar Tarefa"}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Título da Tarefa"
            className="border border-gray-300 rounded p-2"
          />
          <textarea
            {...register("description")}
            placeholder="Descrição (opcional)"
            className="border border-gray-300 rounded p-2"
            rows={3}
          />
          <Button type="submit">
            <div className="flex justify-center items-center gap-2">
              <Plus className="w-5 h-5 text-white-500" />
              {editingTaskId ? "Salvar Alterações" : "Adicionar Tarefa"}
            </div>
          </Button>
        </form>
      </Card>

      <Container className="flex flex-wrap gap-4 p-4 justify-between w-full px-0">
        {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              className="w-full min-w-[300px]"
              onDelete={() => handleDelete(task.id)}
              onEdit={() => handleEdit(task)}
            />
          ))}
      </Container>
    </Container>
  );
}
