import React from "react";
import {useState} from 'react';
import {TaskList} from "./TaskList";
import {AddAlert} from './Alert/AddAlert'
import {EditAlert} from './Alert/EditAlert'
import { SearchRow } from "./Search";
import {AddNewTask} from './AddTask/AddNewTaskElem'
import { useUpdateTask } from "../hooks/useTasks";
import styled from "styled-components";

const Container =styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

function ToDoListPage() {


  // Добавляем состояние для поискового запроса
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const { updateTask } = useUpdateTask();

  


  // Функция для обновления поискового запроса
  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  }

  const handleTaskClick = (task) => {
    setEditTask(task);
    setIsModalOpen(true);
  };

  const handleSaveTask = (id, newName) => {
    const updatedTask = { ...editTask, name: newName };
    updateTask(updatedTask);
    setIsModalOpen(false);
  };

  return (
    <Container>
      <SearchRow onSearchChange={handleSearchInputChange}/>
      <AddAlert>
        <AddNewTask/>
      </AddAlert>
      <TaskList searchValue={searchValue} onTaskClick={handleTaskClick}/>
      <EditAlert
        task={editTask}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
      />
    </Container>
  );


}


export default ToDoListPage;
