import { Plus } from 'lucide-react';
import Button from "@/components/button";
import Container from "@/components/container";
import Card from "@/components/card";
import TaskCard from "@/components/taskcard";

export default function Home() {
  return (
    <Container className="bg-gray-100 flex-col min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Lista de Tarefas</h1>
      <Card className="w-full p-8 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4">Adicionar Tarefa</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Título da Tarefa"
            className="border border-gray-300 rounded p-2"
          />
          <textarea
            placeholder="Descrição (opcional)"
            className="border border-gray-300 rounded p-2"
            rows={3}
          />
          </form>
        <Button>
          <div className='flex justify-center items-center gap-2'>
            <Plus className="w-5 h-5 text-white-500" />
            Adicionar Tarefa
          </div>
        </Button>
      </Card>
      <Container className="flex flex-wrap gap-4 p-4 justify-between w-full px-0">
        <TaskCard
          title="Tarefa 1"
          description="Descrição da tarefa 1"
          className="w-full min-w-[300px]"
        />
        <TaskCard
          title="Tarefa 2"
          description="Descrição da tarefa 2"
          className="w-full min-w-[300px]"
        />
      </Container>
    </Container>

  );
}
