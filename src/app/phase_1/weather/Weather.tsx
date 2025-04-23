import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid";
import { Pencil, X } from 'lucide-react'

import React, { useState, useEffect } from "react";

const Weather = () => {
  const [task, setTask] = useState<{id: string; name: string;}[]>([]);
  const [taskInput, setTaskInput] = useState<string>('')

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if(task.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(task));
    }
  }, [task])

  const addTask = () => {
    if (taskInput.trim() === "") {
      toast.error("Please enter a valid task.");
      return;
    }

    if(itemExists(taskInput)) {
      setTaskInput('');
      return toast.error('Item already exists!');
    }

    const newTask = { id: uuidv4(), name: taskInput}

    setTask([...task, newTask]);
    setTaskInput('');

    toast.success('Item has been added!');
  }

  const updateTaskValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  const removeTask = (id: string) => {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask)

    toast.success('Item has been removed!');
  } 

  const editTask = (id: string, newName: string) => {
    const updatedTasks = task.map((task) => 
      task.id === id ? {...task, name: newName} : task
    );

    if(itemExists(newName)) {
      setTaskInput('');
      return toast.error('Item already exists!');
    }

    setTask(updatedTasks)
    toast.success('Task has been updated!')
  }

  const itemExists = (name: string) => {
    return task.some(t => t.name === name);
  }

  const listItems = (): React.ReactNode => {
    return (
      <ul className="list-disc list-inside w-auto max-w-[200px] block mx-auto">
        {task.map(({id, name}) => (
          <li key={id} className="flex justify-between items-center my-2">
            {name}
            <Button 
              variant="destructive" 
              className="ml-auto" 
              onClick={() => removeTask(id)}
            >
              <X />
            </Button>
            <Button
              variant="secondary"
              className="ml-2"
              onClick={() => editTask(id, prompt("Edit Task", name) || name)}
            >
              <Pencil />
            </Button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="flex justify-center mt-5 gap-2">
        <Input className="w-50" onChange={updateTaskValue} onKeyDown={handleKeyDown} value={taskInput} />
        <Button onClick={addTask}>Add Task</Button>
      </div>
      {listItems()}
      <Toaster />
    </>
  );
};

export default Weather;
