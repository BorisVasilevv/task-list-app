import React from "react";
import {useState} from 'react';
import {TaskList} from "./TaskList";
import {Alert} from './Alert/Alert'
import { SearchRow } from "./Search";
import {AddNewTask} from './AddTask/AddNewTaskElem'
import styled from "styled-components";

const Container =styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

function ToDoListPage() {
  // Добавляем состояние для поискового запроса
  const [searchValue, setSearchValue] = useState('');

  // Функция для обновления поискового запроса
  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  }
  return (
    <Container>
        <SearchRow onSearchChange={handleSearchInputChange}/>
        <Alert title="Добавить">
          <AddNewTask/>
        </Alert>
        <TaskList searchValue={searchValue}/>
    </Container>
  );
}


export default ToDoListPage;
